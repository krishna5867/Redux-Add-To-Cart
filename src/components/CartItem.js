import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./../store/cartSlice";
import "./Cart.css";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(cartActions.removeItem(id));
  }

  const increaseQuantity = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  const decreaseQuantity = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <>
      <div className="cartItem">
        <h2> {name}</h2>
        <p>${price} /-</p>
        <p>x{quantity}</p>
        <article>Total ${total}</article>
        <button className="cart-actions" onClick={decreaseQuantity}>
          -
        </button>
        <button className="cart-actions" onClick={increaseQuantity}>
          +
        </button>
        <button className="cart-action" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </>
  );
};

export default CartItem;
