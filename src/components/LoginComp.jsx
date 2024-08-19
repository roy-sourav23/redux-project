import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slice/LoginSlice";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Swal from "sweetalert2";

const LoginComp = () => {
  const [userData, setUserData] = useState({});
  // console.log("userData", userData);

  let dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useSelector((state) => {
    console.log("state in login comp", state);
  });
  const error = "";

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submition start");

    dispatch(login(userData)).then((res) => {
      console.log("response", res);
      // const message = res;
      // console.log("message", message);
      // console.log("status", res.status);

      if (res.payload.status == 200) {
        Swal.fire("SweetAlert2 is working!");

        navigate("/dashboard");
      }
    });
  };

  return (
    <div>
      {/* <div className=" ">{Swal.fire("SweetAlert2 is working!")}</div> */}
      <form
        onSubmit={handleSubmit}
        className="max-w-[350px] bg-blue-300 rounded mx-auto my-5 px-6 py-10"
      >
        <h3 className="text-center text-[1.5rem] py-2">Log in</h3>

        <fieldset className="py-4">
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="enter email"
            className="w-full px-4 py-2 rounded text-sm border-none outline-none"
          />
        </fieldset>
        <fieldset className="py-4">
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            autoComplete="off"
            placeholder="enter password"
            className="w-full px-4 py-2 rounded text-sm border-none outline-none"
          />
        </fieldset>
        <button
          type="submit"
          className="w-full px-4 py-2 rounded text-sm border-none outline-none bg-[#6d6969] focus:bg-[#494848] text-white "
        >
          log in
        </button>
      </form>

      {error && <h3>{error}</h3>}
    </div>
  );
};

export default LoginComp;
