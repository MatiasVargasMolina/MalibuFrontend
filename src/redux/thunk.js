import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginSuccess, loginFailure } from './slices/login/loginSlice';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', credentials,{withCredentials:true});
      console.log(response.data)
      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.log(error)
      dispatch(loginFailure(error.message));
    }
  }
);

export const auth = createAsyncThunk(
  'auth',
  async ({ dispatch }) => {
    try {
      const response = await axios.get('http://localhost:8080/api/test/user', credentials,{withCredentials:true});
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  }
);


