import { createSlice } from "@reduxjs/toolkit";

import api from "../api";

export const initialState = {
  user: null,
  wins: 0,
  losses: 0,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startAuthOperation: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    endAuthOperation: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.user = payload.username;
      state.wins = payload.wins;
      state.losses = payload.losses;
    },
    failAuthOperation: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    logoutOperation: (state) => {
      state.user = null;
      state.wins = 0;
      state.losses = 0;
    },
    startScoreOperation: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    endScoreOperation: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.wins = payload.wins;
      state.losses = payload.losses;
    },
    failScoreOperation: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  startAuthOperation,
  endAuthOperation,
  failAuthOperation,
  logoutOperation,
  startScoreOperation,
  endScoreOperation,
  failScoreOperation,
} = userSlice.actions;

export function login(payload) {
  return async (dispatch) => {
    dispatch(startAuthOperation());

    try {
      const user = await api.auth.login(payload);
      dispatch(endAuthOperation(user));
    } catch (error) {
      dispatch(failAuthOperation(error.message));
    }
  };
}

export function register(payload) {
  return async (dispatch) => {
    dispatch(startAuthOperation());

    try {
      const user = await api.auth.register(payload);
      dispatch(endAuthOperation(user));
    } catch (error) {
      dispatch(failAuthOperation(error.message));
    }
  };
}

export function logout() {
  return (dispatch) => {
    dispatch(logoutOperation());
  };
}

export function updateScore(payload) {
  return async (dispatch) => {
    dispatch(startScoreOperation());

    try {
      const newScore = await api.score.update(payload);
      dispatch(endScoreOperation(newScore));
    } catch (error) {
      dispatch(failScoreOperation(error.message));
    }
  };
}

export default userSlice.reducer;

export const userSelector = (state) => state.user;
