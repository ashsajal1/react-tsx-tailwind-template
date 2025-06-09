import axios from 'axios';
import { store } from '../store';

// Create axios instance with default config
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const token = state.auth.token;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Handle 401 Unauthorized errors
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // TODO: Implement refresh token logic here
                // const refreshToken = store.getState().auth.refreshToken;
                // const response = await apiClient.post('/auth/refresh', { refreshToken });
                // store.dispatch(setCredentials(response.data));
                
                // Retry the original request
                return apiClient(originalRequest);
            } catch (refreshError) {
                // If refresh token fails, logout user
                store.dispatch({ type: 'auth/logout' });
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient; 