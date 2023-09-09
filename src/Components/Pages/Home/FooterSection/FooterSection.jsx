import React from 'react'
import "./FooterSection.css";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';


const FooterSection = () => {
  return (
    <>
     <div className='footer-section'>
        <div className="row">
            <div className="col">
                <div className=" widget  img-widget">
                    <img src="./Assets/Images/Logo.png" alt="" />    
                    <p>Kashish-Masala.com is a first of its kind spice e-store conceived by a team of management professionals with decades of domain knowledge.</p>
                </div>

            </div>  
            <div className="col">
                <h4 className='widget-title'>Categories</h4>
                <div className="   widget text-widget">
                    <ul className='links'>
                         <li><a href="#">Shop All</a></li> 
                         <li><a href="#"> Veg Spices</a></li>  
                         <li><a href="#">Pure Spices</a></li>  
                         <li><a href="#">Whole Spices</a></li>   
                         <li><a href="#"> Dry Fruits</a></li>  
                         <li><a href="#">Seasonings</a></li>  
                         <li><a href="#">Immunity Booster</a></li>   
                         <li><a href="#">Combo Packs</a></li>   
                    </ul>
                </div>
            </div>


            <div className="col">
                <h4 className='widget-title'>Help</h4>
                <div className="  widget text-widget">
                    <ul className="links">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Signup</a></li>
                        <li><a href="#">Join our Affliate Program</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy and Policy</a></li>
                    </ul>
                </div>
                 
            </div>




            <div className="col">
              <h4 className='widget-title'>Newsletter</h4>
              <form action="">
                <input type="text" placeholder='Your Name' className='inputName' />
                <input type="email"  placeholder='Your Email'  className='inputEmail'/>
                <input type="submit" value="Submit" className='inputSubmit' />
              </form>
            </div>




        </div>
        <hr />
        <div className="row">
            <div className="col">
                <p>&#169; 2023 Kashish Masala All Rights Reserved.</p>
            </div>
            <div className="social-icons">
                <a href="" ><AiFillFacebook/></a>
                <a href="" ><AiFillInstagram/></a>
                <a href="" ><AiFillYoutube/></a>
                <a href="" ><AiFillTwitterSquare/></a>

                
            </div>
        </div>


     </div>


    </>
  )
}

export default FooterSection;