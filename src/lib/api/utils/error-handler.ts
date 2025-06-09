import { AxiosError } from 'axios';
import { store } from '../../store';
import { addToast } from '../../store/slices/uiSlice';

interface ApiErrorData {
    message?: string;
    errors?: Record<string, string[]>;
    code?: string;
}

export class ApiError extends Error {
    constructor(
        public status: number,
        public message: string,
        public data?: ApiErrorData
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

export const handleApiError = (error: unknown): never => {
    if (error instanceof AxiosError) {
        const status = error.response?.status || 500;
        const message = error.response?.data?.message || error.message || 'An error occurred';
        const data = error.response?.data;

        // Handle specific error cases
        switch (status) {
            case 401:
                // Unauthorized - handled by interceptor
                break;
            case 403:
                store.dispatch(addToast({
                    type: 'error',
                    message: 'You do not have permission to perform this action',
                }));
                break;
            case 404:
                store.dispatch(addToast({
                    type: 'error',
                    message: 'The requested resource was not found',
                }));
                break;
            case 422:
                // Validation error
                store.dispatch(addToast({
                    type: 'error',
                    message: 'Please check your input and try again',
                }));
                break;
            case 500:
                store.dispatch(addToast({
                    type: 'error',
                    message: 'An unexpected error occurred. Please try again later',
                }));
                break;
            default:
                store.dispatch(addToast({
                    type: 'error',
                    message,
                }));
        }

        throw new ApiError(status, message, data);
    }

    // Handle non-Axios errors
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';
    store.dispatch(addToast({
        type: 'error',
        message,
    }));

    throw new ApiError(500, message);
};

export const isApiError = (error: unknown): error is ApiError => {
    return error instanceof ApiError;
}; 