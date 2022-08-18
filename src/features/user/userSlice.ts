import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfo } from "../../interfaces";

const initialState: UserInfo = {
  login: "",
  password: "",
  isAuth: false,
};

export const makeLogin = createAsyncThunk(
  "user/login",
  async (_, { dispatch }) => {
    dispatch(auth({ login: "user123", password: "Vazgen1231", isAuth: true }));
  }
);

export const userLogin = createSlice({
  name: "login",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.login = action.payload.login;
      state.password = action.payload.password;
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const { auth } = userLogin.actions;
export default userLogin.reducer;
