import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { REGISTER_ENDPOINT } from "../../api/api";
import axiosInstance from "../../api/api_instance";

// used for registration
export const registration = createAsyncThunk(
  "register/registration",
  async (userData) => {
    // const response = await axios.post(REGISTER_URL, userData);
    // console.log("userData", userData);

    const response = await axiosInstance.post(REGISTER_ENDPOINT, userData);
    console.log("response", response);

    return response.data || {};
  }
);

const initial_value = {
  response: "",
  error: null,
  isLoading: false,
};

const RegisterSlice = createSlice({
  name: "register",
  initialState: initial_value,
  extraReducers: (builder) => {
    builder.addCase(registration.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(registration.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload.data;
    });

    builder.addCase(registration.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      // state.msg = action.payload;
    });
  },
});

export default RegisterSlice.reducer;
