import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PreferencesState {
    theme: 'light' | 'dark' | 'system';
    language: string;
    notifications: boolean;
}

const initialState: PreferencesState = {
    theme: 'system',
    language: 'en',
    notifications: true,
};

const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<PreferencesState['theme']>) => {
            state.theme = action.payload;
        },
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },
        setNotifications: (state, action: PayloadAction<boolean>) => {
            state.notifications = action.payload;
        },
    },
});

export const { setTheme, setLanguage, setNotifications } = preferencesSlice.actions;
export default preferencesSlice.reducer; 