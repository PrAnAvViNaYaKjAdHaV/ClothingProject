import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { RootState } from "../store";
const selectCartReducer = (state:RootState):CartState => state.cart;

export const selectcartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectcartItems], (cartItems) =>
  cartItems.reduce((total, cartItems) => total + cartItems.quantity, 0)
);

export const selectCartTotal = createSelector([selectcartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
