import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <div>
      <h4>Header</h4>

      <h5>Total Cakes : {props.cake}</h5>
      <h5>Total IceCream : {props.IceCream}</h5>

      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        Home
      </button>
      {""}
      <button
        onClick={() => {
          props.history.push("/Cake");
        }}
      >
        Cakes
      </button>
      {""}
      <button
        onClick={() => {
          props.history.push("/IceCream");
        }}
      >
        Ice Cream
      </button>
      {""}
      <br></br>
    </div>
  );
};

const mapStateToString = (props) => {
  return {
    cake: props.Cake.cake,
    IceCream: props.IceCream.IceCream,
  };
};

export default connect(mapStateToString, null)(withRouter(Header));
