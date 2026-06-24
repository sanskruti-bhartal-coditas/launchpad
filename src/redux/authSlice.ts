import { createSlice } from '@reduxjs/toolkit';
import type { LoginInterface } from '../pages/Login/Login.types';

interface AuthState {
  user : LoginInterface | null,
  isAuthenticated : boolean
}

const initialState:AuthState = {
    user: null,
    isAuthenticated: false,
  }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;