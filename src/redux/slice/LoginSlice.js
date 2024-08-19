import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOGIN_ENDPOINT } from "../../api/api";
import axiosInstance from "../../api/api_instance";



export const login = createAsyncThunk("login/login", async (userData) => {
  // console.log("in login slice");

  const response = await axiosInstance.post(LOGIN_ENDPOINT, userData);
  console.log("response", response);

  return response.data || {};
});

const initial_value = {
  response: "",
  error: "",
  isLoading: false,
};

const LoginSlice = createSlice({
  name: "login",
  initialState: initial_value,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      // console.log("pending state", action.error.message);
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload?.token;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      // console.log("rejected state00000", typeof action.error);

      // console.log("rejected state", action.error);
      // console.log("rejected state", action.error.message);

      // state.msg = action.payload;
    });
  },
});

export default LoginSlice.reducer;
