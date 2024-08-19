import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComp from "../components/LoginComp";
import Registration from "../components/Registration";
import UserProfile from "../components/UserProfile";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginComp />}></Route>
        <Route path="register" element={<Registration />}></Route>
        <Route path="dashboard" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
