import { createSlice } from "@reduxjs/toolkit"

import api from "../api"

export const initialState = {
  user: null,
  isLoading: false,
  error: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startAuthOperation: state => {
      state.isLoading = true
      state.error = null
    },
    endAuthOperation: (state, { payload }) => {
      state.isLoading = false
      state.error = null
      state.user = payload
    },
    failAuthOperation: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
    logoutOperation: state => {
      state.user = null
    }
  }
})

export const { startAuthOperation, endAuthOperation, failAuthOperation, logoutOperation } = authSlice.actions

export function login(payload) {
  return async dispatch => {
    dispatch(startAuthOperation())

    try {
      const user = await api.auth.login(payload)
      dispatch(endAuthOperation(user))
    } catch (error) {
      dispatch(failAuthOperation(error.message))
    }
  }
}

export function register(payload) {
  return async dispatch => {
    dispatch(startAuthOperation())

    try {
      const user = await api.auth.register(payload)
      dispatch(endAuthOperation(user))
    } catch (error) {
      dispatch(failAuthOperation(error.message))
    }
  }
}

export function logout() {
  return dispatch => {
    dispatch(logoutOperation())
  }
}

export default authSlice.reducer

export const authSelector = state => state.auth
