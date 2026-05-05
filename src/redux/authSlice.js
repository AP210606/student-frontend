import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode'; // Named import

const token = localStorage.getItem('token');
let initialUser = null;
let initialRole = null;

if (token) {
  try {
    const decoded = jwtDecode(token);
    initialUser = decoded;
    initialRole = decoded.role;
  } catch (e) {
    localStorage.removeItem('token');
  }
}

const initialState = {
  token,
  user: initialUser,
  role: initialRole,
  isAuthenticated: !!token,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const { token } = action.payload;
      localStorage.setItem('token', token);
      const decoded = jwtDecode(token);
      state.token = token;
      state.user = decoded;
      state.role = decoded.role;
      state.isAuthenticated = true;
    },
    logout(state) {
      localStorage.removeItem('token');
      state.token = null;
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer; // Yeh important hai