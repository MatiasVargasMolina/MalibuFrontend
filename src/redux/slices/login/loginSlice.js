import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null
};

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    }
  }
});

export const { loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice;
