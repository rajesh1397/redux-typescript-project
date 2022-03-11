import Product from "../models/Product";
type Action =
  | { type: "add_to_cart", payload: Product }
  | { type: "delete_from_cart", payload: number }
  | { type: "checkout_cart" };

const initialState:Product[] = [];

const rootReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case "add_to_cart":
      return [...state, action.payload];

    case "delete_from_cart":
      return state.filter((product, i) => product.id !== action.payload);

    case "checkout_cart":
      return [];

    default:
      return state;
  }
};

export default rootReducer;
