import { Middleware, AnyAction, UnknownAction } from '@reduxjs/toolkit';
import { refreshToken } from '../thunks/auth.thunks';
import { ApiError } from '@/lib/api/utils/error-handler';

interface RejectedAction extends UnknownAction {
    payload: unknown;
    meta?: {
        arg: unknown;
    };
}

export const authMiddleware = ((store) => (next) => async (action: UnknownAction) => {
    const state = store.getState();
    const { refreshToken: refreshTokenValue } = state.auth;

    // If the action is rejected and it's an API error with 401 status
    if (action.type.endsWith('/rejected')) {
        const rejectedAction = action as RejectedAction;
        const error = rejectedAction.payload;
        if (error instanceof ApiError && error.status === 401 && refreshTokenValue) {
            try {
                // Try to refresh the token
                await store.dispatch(refreshToken(refreshTokenValue) as unknown as AnyAction);
                // Retry the original action
                if (rejectedAction.meta?.arg) {
                    return store.dispatch(rejectedAction.meta.arg as unknown as AnyAction);
                }
            } catch (refreshError) {
                // If refresh fails, logout
                store.dispatch({ type: 'auth/logout' });
            }
        }
    }

    return next(action);
}) as Middleware; 