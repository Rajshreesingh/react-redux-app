import { INCREMENT, DECREMENT } from "../constants/Index";
const initialValue = [0, ""];
const changeCount = (state = initialValue, action) => {
  console.log(action, "action");
  switch (action.type) {
    case INCREMENT:
      return [state[0] + action.payload["num"], action.payload["data"].title];
    case DECREMENT:
      return [state[0] - action.payload["num"], action.payload["data"].title];
    default:
      return state;
  }
};

export default changeCount;
