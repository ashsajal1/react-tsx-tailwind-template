import { createAsyncThunk } from '@reduxjs/toolkit';
import authService, { LoginCredentials, RegisterData, AuthResponse } from '@/lib/api/services/auth.service';
import { handleApiError } from '@/lib/api/utils/error-handler';

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: LoginCredentials, { rejectWithValue }) => {
        try {
            const response = await authService.login(credentials);
            return response;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (data: RegisterData, { rejectWithValue }) => {
        try {
            const response = await authService.register(data);
            return response;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await authService.logout();
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

export const refreshToken = createAsyncThunk(
    'auth/refreshToken',
    async (refreshToken: string, { rejectWithValue }) => {
        try {
            const response = await authService.refreshToken(refreshToken);
            return response;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

export const getProfile = createAsyncThunk(
    'auth/getProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await authService.getProfile();
            return response;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

export const updateProfile = createAsyncThunk(
    'auth/updateProfile',
    async (data: Partial<AuthResponse['user']>, { rejectWithValue }) => {
        try {
            const response = await authService.updateProfile(data);
            return response;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
); 