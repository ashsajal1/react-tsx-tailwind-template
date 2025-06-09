import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userPreferencesReducer from './slices/userPreferencesSlice';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';

const rootReducer = combineReducers({
  userPreferences: userPreferencesReducer,
  auth: authReducer,
  ui: uiReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // Only persist these reducers
  whitelist: ['userPreferences', 'auth'],
  // Don't persist these reducers
  blacklist: ['ui'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 