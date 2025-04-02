import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface AuthFormState {
  authRegFormHeight: number;
  authLoginFormHeight: number;
  registerFormActive: boolean;
}

const initialState: AuthFormState = {
  authRegFormHeight: 0,
  authLoginFormHeight: 0,
  registerFormActive: false,
};

const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    setAuthRegFormHeight: (state, action: PayloadAction<number>) => {
      state.authRegFormHeight = action.payload;
    },
    setAuthLoginFormHeight: (state, action: PayloadAction<number>) => {
      state.authLoginFormHeight = action.payload;
    },
    setRegisterFormActive: (state, action: PayloadAction<boolean>) => {
      state.registerFormActive = action.payload;
    }
  }
});

export const {
  setAuthRegFormHeight,
  setAuthLoginFormHeight,
  setRegisterFormActive
} = authFormSlice.actions;

export default authFormSlice.reducer;
