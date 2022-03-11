import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "../../models/Product";

import { Link } from "react-router-dom";
import classes from "./Cart.module.css";

import { Button,Box } from "@mui/material";

import Cartcard from "../Cartcard/Cartcard";

function Cart() {
  const dispatch = useDispatch();
  const products:Product[] = useSelector<Product[],Product[]>((state) => state);
  //   console.log(products);
  return (
    <>
      <Box sx={{ width: "90%", margin: "0px auto", padding: "24px" }}>
        {products && products.map((product) => <Cartcard product={product} />)}
        {products.length > 0 ? (
          <Button
            onClick={() => dispatch({ type: "checkout_cart" })}
            variant="outlined"
            color="success"
          >
            Checkout
          </Button>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2>No items in cart</h2>
            <Link className={classes.gotoshop} to="/shop">
              Shop again
            </Link>
          </div>
        )}
      </Box>
    </>
  );
}

export default Cart;
