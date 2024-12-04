import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    user: {
      username: null,
      userID: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.user.username = action.payload.username;
      state.user.userID = action.payload.userID;
      state.authenticated = true;
    },
    logout: (state) => {
      state.user.username = null;
      state.user.userID = null;
      state.authenticated = false;
    },
  },
});

const { login, logout } = authSlice.actions;

export { login, logout };
export default authSlice.reducer;
