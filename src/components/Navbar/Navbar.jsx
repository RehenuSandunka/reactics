import React,{useState} from 'react'
import './navbar.css'
import{ BiShoppingBag } from 'react-icons/bi'
import{AiFillCloseCircle}from 'react-icons/ai'
import{TbGridDots}from 'react-icons/tb'




const Navbar = () => {
//code to toggle/show navbar
const [active,setActive]=useState('navbar')
const showNav=()=>{
    setActive('navbar activeNavbar')
}

//code to remove navbar
const removeNav=()=>{
    setActive('navbar')
}

//Code to add the background color to the header

const [transparent,setTransparent]=useState('header')
const addBg =()=>{
    if(window.scrollY >=10){
        setTransparent('header activeHeader')
    }
    else{
        setTransparent('header')
    }
}
window.addEventListener('scroll',addBg)



    return (
        <section className="navbarSection">
            <div className={transparent}>
                <div className="logoDiv">
                  <a href="#"className="logo">
                      <h1 className="flex">LARA</h1>
                      </a>  
                </div>
            


            <div className={active}>
                <ul className="navLists flex">

                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Shop</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink"><BiShoppingBag className="icon"/></a>
                    </li>


                    

                </ul>

                <div onClick={removeNav}className="closeNavbar">
                <AiFillCloseCircle className="icon"/>
                </div>




            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon"/>


            </div>
        



            </div>

        </section>
    )
}

export default Navbar