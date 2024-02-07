import React from "react";
import FullScreenSlide from "../fullScreenSlide/fullScreenSlide";
import aboubacar from '../../media/aboubacar-5-fire.png'
import './parallaxpage.css'
import gokuJiren from '../media/goku-vs-jiren.jpg'

const ParallaxPage = () => {


    return (
        <section className="parallax-page-container">
          <div className="parallax-page-herobanner">
          
            {/* <img src={aboubacar}/> */}

          </div>
            <FullScreenSlide/>
        </section>
    )
}

export default ParallaxPage