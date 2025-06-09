import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';
import preferencesReducer from './slices/preferencesSlice';
import uiReducer from './slices/uiSlice';
import { authMiddleware } from './middleware/auth.middleware';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'preferences'], // Only persist these reducers
};

const rootReducer = combineReducers({
    auth: authReducer,
    preferences: preferencesReducer,
    ui: uiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }).concat(authMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 