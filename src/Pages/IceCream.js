import React from "react";
import { connect } from "react-redux";
import { addIceCream, minusIceCream } from "../Actions/IceCreamAction";
import "./../App.css";

const IceCream = (props) => {
  console.log(props);
  return (
    <div className="App">
      <button
        onClick={() => {
          props.addIceCream();
        }}
      >
        Add Your IceCream (+){" "}
      </button>
      <h3>IceCream: {props.IceCream} </h3>
      <button
        onClick={() => {
          props.minusIceCream();
        }}
      >
        Remove Your IceCream (-){" "}
      </button>
    </div>
  );
};

const mapStateToString = (props) => {
  return {
    IceCream: props.IceCream.IceCream,
  };
};

const mapDispatchToString = (dispatch) => {
  return {
    addIceCream: () => dispatch(addIceCream()),
    minusIceCream: () => dispatch(minusIceCream()),
  };
};

export default connect(mapStateToString, mapDispatchToString)(IceCream);
