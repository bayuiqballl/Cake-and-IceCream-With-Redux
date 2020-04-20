export const PLUS = "PLUS";
export const MINUS = "MINUS";

export const addIceCream = () => {
  return {
    type: PLUS,
  };
};

export const minusIceCream = () => {
  return {
    type: MINUS,
  };
};
