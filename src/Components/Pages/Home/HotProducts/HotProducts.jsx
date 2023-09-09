import React from 'react'
import Products from '../Products/products';
import './hotproducts.css'

const HotProducts = () => {
  return (
    <div>
    
         <h1 className='heading'>Hot Products!</h1>
        <div className="products">
         <Products />
         <Products/>
         <Products/>         
         <Products/>
        </div>
        



    </div>
  )
}

export default HotProducts