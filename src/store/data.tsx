// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authFormReducer from '../slices/authFormSlice';
import mainReducer from '../slices/mainSlice';

export const store = configureStore({
  reducer: {
    authForm: authFormReducer,
    main: mainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
