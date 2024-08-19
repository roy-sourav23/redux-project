import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    msg: "",
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.msg = "Increment done";
    },
    decrement: (state) => {
      state.count -= 1;
      state.msg = "Decrement done";
    },
    reset: (state) => {
      state.count = 0;
      state.msg = "Reset done";
    },
  },
});

export default CounterSlice.reducer;
export const { increment, decrement, reset } = CounterSlice.actions;
