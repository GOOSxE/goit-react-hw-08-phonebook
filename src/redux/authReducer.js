import { createSlice } from '@reduxjs/toolkit';
import {
  loginUserThunk,
  logoutUserThunk,
  refreshUserThunk,
  registerUserThunk,
} from './operations';
const initialState = {
  isLoading: false,
  error: null,
  userData: null,
  authentificated: false,
  token: null,
};
// ? // Слайс аутентифікації з обробниками подій реєстрації, логіну, рефрешу, та логауту ;
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ? // Редюсер зміни стану завантаження ;
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    // ? // Редюсер встановлення стану помилки ;
    setError: (state, action) => {
      state.error = action.payload;
    },
    // ? // Редюсер встановлення значення фільтру ;
    setFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      // ? // Опрацювання реєстраації ;
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ? // Опрацювання логіну ;
      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ? // Опрацювання рефрешу ;
      .addCase(refreshUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.userData = action.payload;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ? // Опрацювання логауту ;
      .addCase(logoutUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
// ? // Селектори ;
export const selectAuthLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;
export const selectIsAuthed = state => state.auth.authentificated;

// ? // Генерація екшенів ;
export const { setIsLoading, setError, setFilter } = authSlice.actions;
// ? // Генерація root-редюсеру ;
export const authReducer = authSlice.reducer;
