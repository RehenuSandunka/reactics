

import React from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Offers from './components/Offers/Offers'
import Features from './components/Features/Features'
import Products from './components/Products/Products'
import Tips from './components/Tips/Tips'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'
import Brands from './components/Brands/Brands'

import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <>
        <Navbar/>
         <Home />
        <Offers />
        <Features />
        < Products/>

        <Tips />
        <Testimonials /> 
        <Brands />
        <Subscribe /> 

     

     <Footer/> 


        </>
    )
}

export default App





