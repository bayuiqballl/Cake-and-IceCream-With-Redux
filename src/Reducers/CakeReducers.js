import { INCREMENT, DECREMENT } from "../Actions/CakeAction";

const initialState = {
  cake: 0,
};

const CakeReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        cake: state.cake + 1,
      };
    case DECREMENT:
      return {
        ...state,
        cake: state.cake - 1,
      };
    default:
      return state;
  }
};

export default CakeReducers;
