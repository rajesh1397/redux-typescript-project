import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Link } from "react-router-dom";
import classes from "./Shop.module.css";

import Product from "../../models/Product";

import Productcard from "../Productcard/Productcard";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

function Shop() {
  const API_URL = "https://fakestoreapi.com/products?limit=16";

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);

  const fetchProducts = async () => {
    const { data } = await Axios.get(API_URL);
    console.log(data);
    setProducts(data);
    setIsloading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "50px",
            color: "rgb(49, 146, 106)",
          }}
        >
          REDUX STORE
        </h1>
      </Link>
      <Box sx={{ flexGrow: 1, padding: "18px" }}>
        <Grid container spacing={2}>
          {isLoading ? (
            <>
              <Skeleton variant="rectangular" width={210} height={118} />
            </>
          ) : (
            products.map((product) => (
              <Productcard
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))
          )}
        </Grid>
      </Box>
      <div className={classes.checkout}>
        <Link className={classes.cart} to="/cart">
          Checkout
        </Link>
      </div>
    </>
  );
}

export default Shop;
