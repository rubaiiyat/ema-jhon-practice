import React from "react";
import "./Products.css";

const Products = ({ product, handleAddToCart }) => {
  const { img, name, price, seller, ratingsCount } = product;
  return (
    <div className="cart">
      <img src={img} alt="" />
      <p>Name : {name}</p>
      <p>Price : {price}</p>
      <p>Manufacturer : {seller}</p>
      <p>Rating : {ratingsCount}</p>
      <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
    </div>
  );
};

export default Products;
