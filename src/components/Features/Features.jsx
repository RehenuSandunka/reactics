import React from 'react'
import './features.css'

import{ MdLocalShipping } from 'react-icons/md'
import{ MdShoppingBag } from 'react-icons/md'
import{ MdHighQuality } from 'react-icons/md'



const Features = () => {
    return (
        <section className="features">
          
           <div className="secContainer2">
           


               <div className="mainContent container grid">
                   <div className="singleItem">
                   <MdLocalShipping className="icon2"/>
                      
                          <h3>Free Shipping</h3>
                          <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing </p>
                       

                   </div>

                   <div className="singleItem">
                   <MdShoppingBag className="icon2"/>
                      
                          <h3>Online Order</h3>
                          <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                       

                   </div>

                   <div className="singleItem">
                   <MdHighQuality className="icon2"/>
                      
                          <h3>Quality Product</h3>
                          <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                       

                   </div>


            



                   


               </div>
           </div>


       </section>
    )
}

export default Features