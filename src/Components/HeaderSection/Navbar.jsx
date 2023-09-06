import React from "react";
import "./navbar.css";
import {BsSearch, BsCartFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="top-bar">
          <div className="left-col">
            <p>Call Us : 8700059292/8447229145</p>
          </div>
          <div className="right-col">
            <p>Free Delivery across India</p>
          </div>
        </div>
        <div className="main-header">
          <div className="sec-header">
            <div className="img">
              <img src="./Assets/Images/Logo.png" alt="" className="logo" />
            </div>

            <div className="search">
              <form action="">
               
              <input
                type="text"
                name="search products"
                id=""
                placeholder=" Search products..."
              />
              <button className="search-btn"><BsSearch/></button>
              </form>
              
            </div>

            <div className="navigation">

              <div className="Account">
                <div className="header-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>

                </div>
                
                <p>My Account</p>
              </div>
              <hr/>
              <div className="help">
                <div className="header-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>

                </div>
                

                <p>Customer Help</p>
              </div>
              <div className="checkout">
                <div className="header-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>

                </div>
                
                <p>checkout</p>
              </div>
            </div>
          </div>
        </div>
        <div className="nav">
          <div className="nav-links">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Product Category</a>
              </li>
              <li>
                <a href="">List of Spices</a>
              </li>
              <li>
                <a href="">Latest Offer</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="cart-content">
            <span className="amount">₹00.00</span>


            <div className="cart-logo">
            <BsCartFill/>
            </div>

            


           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
