import { useDispatch } from "react-redux";

import Product from "../../models/Product";

import classes from "./Cartcard.module.css";

function Cartcard({ product }:{product:Product}) {
  const { id, title, price } = product;
  const dispatch = useDispatch();
  return (
    <div className={classes.cart__wrapper}>
      <p className={classes.cart_title}>{title}</p>
      <button
        className={classes.cart_button}
        onClick={() => dispatch({ type: "delete_from_cart", payload: id })}
      >
        Remove
      </button>
      <p className={classes.cart_price}>Rs {price}</p>
    </div>
  );
}

export default Cartcard;
