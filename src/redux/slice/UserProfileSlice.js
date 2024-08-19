import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PROFILE_DETAILS_ENDPOINT } from "../../api/api";
import axiosInstance from "../../api/api_instance";
import { useSelector } from "react-redux";

export const userProfile = createAsyncThunk(
  "user/userProfile",
  async (token) => {
    console.log("token", token);

    const response = await axiosInstance.get(PROFILE_DETAILS_ENDPOINT, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log("response", response);

    return response.data || {};
  }
);

const initial_value = {
  response: "",
  error: "",
  isLoading: false,
};

const UserProfileSlice = createSlice({
  name: "userProfile",
  initialState: initial_value,
  extraReducers: (builder) => {
    builder.addCase(userProfile.pending, (state, action) => {
      state.isLoading = true;
      // console.log("pending state", action.error.message);
    });

    builder.addCase(userProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload.data;
    });

    builder.addCase(userProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      // console.log("rejected state00000", typeof action.error);

      // console.log("rejected state", action.error);
      // console.log("rejected state", action.error.message);

      // state.msg = action.payload;
    });
  },
});

export default UserProfileSlice.reducer;
