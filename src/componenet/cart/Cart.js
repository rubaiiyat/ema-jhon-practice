import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  return (
    <div className="Order Summary">
      <h1>Order Summary</h1>
      <p>Cart Lenght: {cart.length}</p>
    </div>
  );
};

export default Cart;
