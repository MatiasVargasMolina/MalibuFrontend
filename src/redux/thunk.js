import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginSuccess, loginFailure } from './slices/login/loginSlice';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', credentials);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  }
);
