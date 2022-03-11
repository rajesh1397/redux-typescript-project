import React from "react";
import { useDispatch } from "react-redux";

import Product from "../../models/Product";

import { Link } from "react-router-dom";

import classes from "./Productcard.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Productcard({ id, image, title, price }:Product) {
  const dispatch = useDispatch();

  const productDetail = {
    id,
    image,
    title,
    price,
  };

  const addToCartHandler = () => {
    dispatch({ type: "add_to_cart", payload: productDetail });
  };

  return (
    <Grid item xs={6} md={3}>
      <Card sx={{ maxWidth: 345, height: 450, position: "relative" }} key={id}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ maxHeight: 75, overflow: "hidden" }}
          >
            {title}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            Rs {price}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            position: "absolute",
            bottom: "15px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Link
            onClick={addToCartHandler}
            className={classes.buynow}
            to="/shop"
          >
            Add tocart
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Productcard;
