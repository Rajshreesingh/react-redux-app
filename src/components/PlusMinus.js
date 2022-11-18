import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../actions/Index";
function PlusMinus(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.changeCount);
  //console.log(count);
  return (
    <div>
      <button onClick={() => dispatch(decrement(1, data[0] - 1))}>-</button>
      {data[0]}
      <button onClick={() => dispatch(increment(2, data[0] + 1))}>+</button>
      <br />
      <div>{data[1]}</div>
    </div>
  );
}

export default PlusMinus;
