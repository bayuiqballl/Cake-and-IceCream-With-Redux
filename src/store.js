import { createStore, combineReducers } from "redux";
import CakeReducers from "./Reducers/CakeReducers";
import IceCreamReducers from "./Reducers/IceCreamReducers";

const combine = combineReducers({
  IceCream: IceCreamReducers,
  Cake: CakeReducers,
});

export default createStore(combine);
