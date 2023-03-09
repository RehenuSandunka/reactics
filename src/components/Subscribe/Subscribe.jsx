import React from 'react'
import './subscribe.css'
import img from './Subscribe Us.png'



import {IoIosRocket}from 'react-icons/io'


const Subscribe = () => {
    return (
 

<div className="newsletter">
<div className="secContainer5 container5 grid">
  
<div className="form">
 <input type="text" id="t1" placeholder="Your email address"/>
  <button> <IoIosRocket className="iconzR"/></button>
  
</div>

    <img src={img} alt="Image title" className="subs"/></div>


</div>

)
}





















        {/* <div className="subscribe">
        <div className="secContainer4 container4 grid">
            <div className="logoDiv">
                <div className="footerLogo">
                    <a href="#" className="logo flex">
                    <h1 className="flex">LARA</h1>  
                    </a>
                </div>
            </div>

            <div className="socials flex">
                <MdFacebook className="iconz"/>
                <AiFillInstagram className="iconz"/>
                <IoLogoWhatsapp className="iconz"/>
                <AiFillTwitterCircle className="iconz"/>

            </div>
            </div>
    </div> */}


export default Subscribe
