import React from "react";
import "./products.css";

const products = () => {
  return (
    <>
    <div class="product-card">
        <img src="https://www.keralaspicesonline.com/wp-content/uploads/2023/08/20230825_111820-300x300.jpg" alt="Product Image"  className="product-image" />
        <h2 className="product-title">SpiceBox organic</h2>
        <p className="product-price">₹1200.99</p>
        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, elit at gravida ultrices.</p>
        <button className="product-btn">Add to Cart</button>
    </div>
    </>
  );
};

export default products;
