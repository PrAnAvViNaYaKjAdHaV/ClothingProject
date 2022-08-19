import { AnyAction } from "redux";

import {setIsCartOpen,setCartItem} from './cart.action'

import {CartItem } from "./cart.types";

export type CartState = {
  isCartOpen : boolean;
  cartItems:CartItem[];
}

export const CART_INITIAL_STATE:CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action :AnyAction
):CartState => {
  
  if(setIsCartOpen.match(action)){
    return {
      ...state,
      isCartOpen:action.payload,
    };
  }

  if(setCartItem.match(action)){
    return {
              ...state,
        cartItems:action.payload,
    }
  }
  return state;

};
