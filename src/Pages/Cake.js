import React from "react";
import { connect } from "react-redux";
import { addCake, minusCake } from "../Actions/CakeAction";
import "./../App.css";

const Cake = (props) => {
  console.log(props);
  return (
    <div className="App">
      <button
        onClick={() => {
          props.addCake();
        }}
      >
        Add Your Cake (+){" "}
      </button>
      <h3>Cakes: {props.cake} </h3>
      <button
        onClick={() => {
          props.minusCake();
        }}
      >
        Remove Your Cake (-){" "}
      </button>
    </div>
  );
};

const mapStateToString = (props) => {
  return {
    cake: props.Cake.cake,
  };
};

const mapDispatchToString = (dispatch) => {
  return {
    addCake: () => dispatch(addCake()),
    minusCake: () => dispatch(minusCake()),
  };
};

export default connect(mapStateToString, mapDispatchToString)(Cake);
