import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
interface MainState {
  navHeight: number;
  userAuthorized: boolean;
}

// Define the initial state with proper types
const initialState: MainState = {
  navHeight: 0,
  userAuthorized: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    // Action to set the nav height, payload is a number
    setNavHeight: (state, action: PayloadAction<number>) => {
      state.navHeight = action.payload;
    },
    // Action to set user authorization, payload is a boolean
    seUserAuthorized: (state, action: PayloadAction<boolean>) => {
      state.userAuthorized = action.payload;
    },
  },
});

// Export the actions for use in components
export const { setNavHeight, seUserAuthorized } = mainSlice.actions;

// Export the reducer to be used in the store
export default mainSlice.reducer;