import apiClient from '../client';

export interface UserPreferences {
    theme: 'light' | 'dark' | 'system';
    language: string;
    notifications: {
        email: boolean;
        push: boolean;
        marketing: boolean;
    };
    sidebar: {
        collapsed: boolean;
    };
    tablePreferences: {
        pageSize: number;
        sortBy: string;
        sortDirection: 'asc' | 'desc';
    };
}

const preferencesService = {
    getPreferences: async (): Promise<UserPreferences> => {
        const response = await apiClient.get<UserPreferences>('/preferences');
        return response.data;
    },

    updatePreferences: async (preferences: Partial<UserPreferences>): Promise<UserPreferences> => {
        const response = await apiClient.patch<UserPreferences>('/preferences', preferences);
        return response.data;
    },

    updateNotificationSettings: async (settings: UserPreferences['notifications']): Promise<UserPreferences> => {
        const response = await apiClient.patch<UserPreferences>('/preferences/notifications', settings);
        return response.data;
    },

    updateTablePreferences: async (preferences: UserPreferences['tablePreferences']): Promise<UserPreferences> => {
        const response = await apiClient.patch<UserPreferences>('/preferences/table', preferences);
        return response.data;
    },
};

export default preferencesService; 