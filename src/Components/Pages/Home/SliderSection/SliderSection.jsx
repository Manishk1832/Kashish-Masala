import React from "react";
import "./slidersection.css";
let slideIndex = 0;
showSlides();




const SliderSection = () => {
  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides">
          <img src="https://catchfoods.com/wp-content/uploads/2023/08/Catch-foods-Catch-Masala-Catch-Spices-2.png" alt="" />
        </div>

        <div className="mySlides">
          <img src="https://catchfoods.com/wp-content/uploads/2023/07/complete-range.png" alt="" />
        </div>

        <div className="mySlides">
          <img src="https://catchfoods.com/wp-content/uploads/2023/04/Catch-KitchenRange.jpg" alt="" />
        </div>
      </div>
      <br />
      <div className="showing-dot">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default SliderSection;
