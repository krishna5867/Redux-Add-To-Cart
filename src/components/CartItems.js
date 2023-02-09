import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./../store/cartSlice";

import CartItem from "./CartItem";
import "./Cart.css";
const CartItems = () => {
  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.cart.itemsList);

  const handleRemoveAll = () => {
    dispatch(cartActions.removeAll());
  }
  return (
    <div className="cart-container"> 
    <div className="cart-heading">
      <h2>Your Cart</h2>
        <span className="remove-all" onClick={handleRemoveAll}>
          Remove All
        </span>
      </div> 
      <ul>
          {
            CartItems.map((item) => (
              <li key={item.id}>
            <CartItem
                id = {item.id}
                name = {item.name}
                price = {item.price}
                total = {item.totalPrice}
                quantity = {item.quantity}
                />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default CartItems;
