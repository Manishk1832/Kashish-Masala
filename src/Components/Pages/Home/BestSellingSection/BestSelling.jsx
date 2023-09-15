import React from 'react'
import "./bestselling.css"
import Products from '../Products/products'

const BestSelling = () => {
  return (
    <div>

        <h1>Our Best Selling Products</h1>
        <div className="container">
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        
        </div>
        <hr className='hr-bold' />
       
        


    </div>
  )
}

export default BestSelling