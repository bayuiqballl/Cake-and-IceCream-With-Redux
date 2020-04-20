import React from "react";
import "./../App.css";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div>
      <h1>Home</h1>

      <h4>Cakes : {props.cake}</h4>
      <h4>IceCream : {props.IceCream}</h4>
      <hr />
      <h4>total : {props.total} </h4>
    </div>
  );
}

const mapStateToString = (props) => {
  return {
    cake: props.Cake.cake,
    IceCream: props.IceCream.IceCream,
    total: props.Cake.cake + props.IceCream.IceCream,
  };
};

export default connect(mapStateToString, null)(Home);
