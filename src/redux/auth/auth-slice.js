import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, refreshUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [signup.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logout.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled]: state => {
      state.loading = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [refreshUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected]: state => {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
