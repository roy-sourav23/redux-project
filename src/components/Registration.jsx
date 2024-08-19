import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../redux/slice/RegisterSlice";

const Registration = () => {
  const [userData, setUserData] = useState({});
  // console.log("userData");

  let dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useSelector((state) => console.log("in counter comp, state val", state));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registration(userData));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-[350px] bg-blue-300 rounded mx-auto my-5 px-6 py-10"
      >
        <h3 className="text-center text-[1.5rem] py-2">Sign up</h3>
        <fieldset className="py-4">
          <input
            type="text"
            name="first_name"
            id="firstName"
            onChange={handleChange}
            placeholder="enter first name"
            className="w-full px-4 py-2 rounded text-sm border-none outline-none"
          />
        </fieldset>
        <fieldset className="py-4">
          <input
            type="text"
            name="last_name"
            id="lastName"
            onChange={handleChange}
            placeholder="enter last name"
            className="w-full px-4 py-2 rounded text-sm border-none outline-none"
          />
        </fieldset>
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
            autoComplete="off"
            onChange={handleChange}
            placeholder="enter password"
            className="w-full px-4 py-2 rounded text-sm border-none outline-none"
          />
        </fieldset>
        <button
          type="submit"
          className="w-full px-4 py-2 rounded text-sm border-none outline-none bg-[#6d6969] focus:bg-[#494848] text-white "
        >
          sign up
        </button>
      </form>
    </div>
  );
};

export default Registration;
