import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authReducer';
import { contactsReducer } from './contactsReducer';
const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['contacts'],
};
// ? // Створення та конфігурація стору redux-toolkit ;
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// ? // Створення перзістору синхронізованного з локальним сховищем ;
export const persistor = persistStore(store);
