import React from "react";
import "./slidersection.css";

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}




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
