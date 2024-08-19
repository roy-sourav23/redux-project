import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/slice/CounterSlice";

const CounterComp = () => {
  useSelector((state) => console.log("in counter comp, state val", state));

  const { count, msg } = useSelector((state) => state.mycounter);
  let dispatch = useDispatch();

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch(increment())}> Increase + 1</button>
      <button onClick={() => dispatch(decrement())}> Decrease + 1</button>

      <button onClick={() => dispatch(reset())}> Reset</button>
      {msg && <p>{msg}</p>}
    </>
  );
};

export default CounterComp;
