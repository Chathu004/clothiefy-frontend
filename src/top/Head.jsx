import React from 'react'
import './Head.css'
import hand_icon_2 from '../assets/hand_icon_2.png'
import arrow_icon from '../assets/arrow.png'
import hero_6 from '../assets/hero_6.png'

function Head() {
  return (
    <>
    <div className="head">
        <div className="head-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="head-hand-icon">
                    <p>New <br/> Collection For<br/> Everyone</p>
                    <img src={hand_icon_2} alt=""  />
                </div>
                
            </div>
            <div className="head-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=""  />
            </div>
        </div>
        <div className="head-right">
            <img src={hero_6} alt=""  />

        </div>
    </div>
    
    </>
  )
}

export default Head