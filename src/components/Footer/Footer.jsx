import React from 'react'
import './footer.css'
import {MdFacebook}from 'react-icons/md'
import {AiFillInstagram}from 'react-icons/ai'
import {IoLogoWhatsapp}from 'react-icons/io'
import {AiFillTwitterCircle}from 'react-icons/ai'
import {HiLocationMarker}from 'react-icons/hi'
import {MdEmail}from 'react-icons/md'
import {BsFillTelephoneFill}from 'react-icons/bs'
import {FaCcVisa}from 'react-icons/fa'
import {FaCcMastercard}from 'react-icons/fa'
import {FaCcPaypal}from 'react-icons/fa'



const Footer = () => {
    return (
       <div className="footer">
           <div className="secContent4 grid">

           <div className="footerLinks4">

           <div className="footerLinks">
    

    <span className="linkTitle">
       Contact Us
    </span>
    
   <li>< HiLocationMarker/>  <span className="phone">  Flower Rd,Colombo</span></li>
   <li> <MdEmail/><span className="email">  larainq@gmail.com</span></li>
   <li> <BsFillTelephoneFill/><span className="email">  +444 565 6655</span></li>
   <div className="socials flex2">
                   <FaCcVisa className="iconz"/>
                   <FaCcMastercard className="iconz"/>
                   <FaCcPaypal className="iconz"/>
                   <AiFillTwitterCircle className="iconz"/>

               </div>
</div>


</div>


               <div className="logoDiv">
                   <div className="footerLogo">
                       <a href="#" className="logo flex">
                       <h1 className="flex">LARA</h1>  
                       </a>
                       <div className="lara">
                       <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolo Ut enim<br/>sed do eiusmod tempor incididunt </p>
                   </div>
                   </div>
               

               <div className="socials flex">
                   <MdFacebook className="iconz"/>
                   <AiFillInstagram className="iconz"/>
                   <IoLogoWhatsapp className="iconz"/>
                   <AiFillTwitterCircle className="iconz"/>

               </div>
               </div>

    <div className="footerLinks4">        
<div className="footerLinks">
  




        <span className="linkTitle">
        Collections
    </span>
    <li>
        <a href="#">Beautiful eye lashes</a>
    </li>
    <li>
        <a href="#">How to live young</a>
    </li>
    <li>
        <a href="#">Skin Solutions</a>
    </li>
        
    
    
</div>
</div>




               
           </div>


           <div className="last">
           <li>
        <a href="#">Privacy Policy</a>
    </li>
    <li>
        <a href="#">Terms and Conditions</a>
    </li>
    <li>
        <a href="#">Shop</a>
    </li>
    <li>
        <a href="#">About Us</a>
    </li>
    <li>
        <a href="#">Contact</a>
    </li>
           </div>


           
           </div>



       
    )
}

export default Footer