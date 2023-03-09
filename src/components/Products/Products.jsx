import React from 'react'
import './products.css'
import img from './image1.png'




const Products = () => {
    return (
        <section className="product container section">
      <h2 className="secTitle2">Special Offers</h2>

      <div className="secContent grid">
          <div className="product1">
              <div className="pro">
              <img src={img} alt="Image title"/></div>
              <h3>Delux beauty pack</h3>
              <p className="price"><span className="sale">$80</span>  $50</p>
          </div>


          <div className="product1">
          <div className="pro">
          <img src={img} alt="Image title"/></div>
              <h3>Delux beauty pack</h3>
              <p className="price"><span className="sale">$80</span>  $50</p>
          </div>


          <div className="product1">
          <div className="pro">
          <img src={img} alt="Image title"/></div>
              <h3>Delux beauty pack</h3>
              <p className="price"><span className="sale">$80</span>  $50</p>
          </div>

      </div>
      </section>
    )
}

export default Products
