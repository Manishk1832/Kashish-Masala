import React from 'react'
import "./flashsale.css"
import Products from '../Products/products';
const FlashSale = () => {
  return (
    <div>
         <h1>Flash Sale!</h1>
         
        <div className="flash-container">
       
         <Products />
         <Products />
         <Products />
         <Products />
 
        </div>
        

    </div>
  )
}

export default FlashSale