import apiClient from '../client';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData extends LoginCredentials {
    name: string;
}

export interface AuthResponse {
    user: {
        id: string;
        email: string;
        name: string;
        role: 'user' | 'admin';
        avatar?: string;
    };
    token: string;
    refreshToken: string;
}

const authService = {
    login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
        const response = await apiClient.post<AuthResponse>('/auth/login', credentials);
        return response.data;
    },

    register: async (data: RegisterData): Promise<AuthResponse> => {
        const response = await apiClient.post<AuthResponse>('/auth/register', data);
        return response.data;
    },

    logout: async (): Promise<void> => {
        await apiClient.post('/auth/logout');
    },

    refreshToken: async (refreshToken: string): Promise<AuthResponse> => {
        const response = await apiClient.post<AuthResponse>('/auth/refresh', { refreshToken });
        return response.data;
    },

    forgotPassword: async (email: string): Promise<void> => {
        await apiClient.post('/auth/forgot-password', { email });
    },

    resetPassword: async (token: string, password: string): Promise<void> => {
        await apiClient.post('/auth/reset-password', { token, password });
    },

    getProfile: async (): Promise<AuthResponse['user']> => {
        const response = await apiClient.get<AuthResponse['user']>('/auth/profile');
        return response.data;
    },

    updateProfile: async (data: Partial<AuthResponse['user']>): Promise<AuthResponse['user']> => {
        const response = await apiClient.patch<AuthResponse['user']>('/auth/profile', data);
        return response.data;
    },
};

export default authService; 