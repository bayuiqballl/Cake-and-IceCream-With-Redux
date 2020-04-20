export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addCake = () => {
  return {
    type: INCREMENT,
  };
};

export const minusCake = () => {
  return {
    type: DECREMENT,
  };
};
