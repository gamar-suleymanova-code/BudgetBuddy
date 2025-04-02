// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authFormReducer from '../slices/authFormSlice';

export const store = configureStore({
  reducer: {
    authForm: authFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
