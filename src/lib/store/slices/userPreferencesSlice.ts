import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserPreferences {
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

const initialState: UserPreferences = {
  theme: 'system',
  language: 'en',
  notifications: {
    email: true,
    push: true,
    marketing: false,
  },
  sidebar: {
    collapsed: false,
  },
  tablePreferences: {
    pageSize: 10,
    sortBy: 'createdAt',
    sortDirection: 'desc',
  },
};

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    toggleNotification: (state, action: PayloadAction<keyof UserPreferences['notifications']>) => {
      state.notifications[action.payload] = !state.notifications[action.payload];
    },
    toggleSidebar: (state) => {
      state.sidebar.collapsed = !state.sidebar.collapsed;
    },
    setTablePreferences: (state, action: PayloadAction<Partial<UserPreferences['tablePreferences']>>) => {
      state.tablePreferences = { ...state.tablePreferences, ...action.payload };
    },
  },
});

export const {
  setTheme,
  setLanguage,
  toggleNotification,
  toggleSidebar,
  setTablePreferences,
} = userPreferencesSlice.actions;

export default userPreferencesSlice.reducer; 