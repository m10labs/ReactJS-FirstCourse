import React from "react";

function Card() {
  return (
    <div className="card-wrapper">
      <div className="card-image-div"></div>
      <div className="card-product-name">Iphone 12 pro max</div>
      <div className="card-product-price">PKR 150000</div>
      <div className="card-product-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      </div>
      <div className="card-buttons-wrapper">
        <button className="card-button specs-button">Spec</button>
        <button className="card-button cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
