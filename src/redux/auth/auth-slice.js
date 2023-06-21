// import { createSlice } from '@reduxjs/toolkit';

// import { signup, login, logout, current, refreshUser } from './auth-operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: '',
//   isLogin: false,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [signup.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [signup.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.user = payload.user;
//       store.token = payload.token;
//       store.isLogin = true;
//     },
//     [signup.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [login.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [login.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.user = payload.user;
//       store.token = payload.token;
//       store.isLogin = true;
//     },
//     [login.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [logout.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [logout.fulfilled]: store => {
//       store.loading = false;
//       store.user = { name: null, email: null };
//       store.token = null;
//       store.isLogin = false;
//     },
//     [logout.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [current.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [current.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.user = payload;
//       store.isLogin = true;
//     },
//     [current.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },

//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });

// export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, current, refreshUser } from './auth-operations';

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
    [current.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [current.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.isLogin = true;
    },
    [current.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.isLogin = false;
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
