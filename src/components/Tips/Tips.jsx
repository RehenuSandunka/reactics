import React from 'react'


import './tips.css'
import tip1 from './tip1.png'



const Tips = () => {
    return (
        <section className="tips">
            <h2 className="secTitle2">Beauty Tips</h2>
              <div className="secContent grid">
             

              <div className="tipcard">
              <div className="card1">
              <img src={tip1} alt="Image title"/>
              <p className="sub">Lipsticks - By Ana Johnson</p>
              <h3 className="topic">How to apply a lipstick</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              <button className="btn">
                    <a href="#">READ MORE</a>

                </button></div>
          </div>

          
          <div className="tipcard">
              <div className="card1">
              <img src={tip1} alt="Image title"/>
              <p className="sub">Lipsticks - By Ana Johnson</p>
              <h3>How to apply a lipstick</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              <button className="btn">
                    <a href="#">READ MORE</a>

                </button></div>
          </div>

          
          <div className="tipcard">
              <div className="card1">
              <img src={tip1} alt="Image title"/>
              <p className="sub">Lipsticks - By Ana Johnson</p>
              <h3>How to apply a lipstick</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              <button className="btn">
                    <a href="#">READ MORE</a>

                </button></div>
          </div>

          
          <div className="tipcard">
              <div className="card1">
              <img src={tip1} alt="Image title"/>
              <p className="sub">Lipsticks - By Ana Johnson</p>
              <h3>How to apply a lipstick</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              <button className="btn">
                    <a href="#">READ MORE</a>

                </button></div>
          </div>

                  </div>
                 


           
            
        </section>
    )
}

export default Tips
