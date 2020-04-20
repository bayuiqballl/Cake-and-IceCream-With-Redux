import { PLUS, MINUS } from "../Actions/IceCreamAction";

const initialState = {
  IceCream: 0,
};

const IceCreamReducers = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        IceCream: state.IceCream + 1,
      };
    case MINUS:
      return {
        ...state,
        IceCream: state.IceCream - 1,
      };
    default:
      return state;
  }
};

export default IceCreamReducers;
