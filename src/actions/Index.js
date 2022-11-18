import { INCREMENT, DECREMENT } from "../constants/Index";
import { getProduct } from "./services/Service";
export const increment = (num, count) => {
  return async (dispatch) => {
    const data = await getProduct(count);
    //console.log(data, "data");
    dispatch(setIncrement(num, data));
  };
};

export const setIncrement = (num, data) => {
  return {
    type: INCREMENT,
    payload: { num, data },
  };
};

export const decrement = (num, count) => {
  return async (dispatch) => {
    const data = await getProduct(count);
    //console.log(data, "data");
    dispatch(setDecrement(num, data));
  };
};
export const setDecrement = (num, data) => {
  return {
    type: DECREMENT,
    payload: { num, data },
  };
};
