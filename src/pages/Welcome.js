import React from "react";
import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";
function Welcome() {
  return (
    <div className={classes.shop}>
      <h1>Welcome to Redux Store</h1>
      <Link to="/shop">Start Shopping</Link>
    </div>
  );
}

export default Welcome;
