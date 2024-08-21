import { configureStore } from "@reduxjs/toolkit";

import countReducer from "../slice/CounterSlice";
import postsReducer from "../slice/PostSlice";
import registerReducer from "../slice/RegisterSlice";
import loginReducer from "../slice/LoginSlice";
import userProfileReducer from "../slice/UserProfileSlice";
const store = configureStore({
  reducer: {
    // mycounter: countReducer,
    // posts: postsReducer,

    register: registerReducer,
    login: loginReducer,
    userProfile: userProfileReducer,
  },
});

export default store;

// changes also made here
