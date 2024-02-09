import React from "react";
import FullScreenSlide from "../fullScreenSlide/fullScreenSlide";
import aboubacar from '../../media/aboubacar-5-fire.png'
import './parallaxpage.css'
import gokuJiren from '../../media/goku-vs-jiren.jpg'
import stepBack from '../../media/stepback.mp4'
import ServiceOverview from "../overview/overview";

const ParallaxPage = () => {


    return (
        <section className="parallax-page-container">
          <div className="parallax-page-herobanner">
          
            <img src={gokuJiren}/>

          </div>
        

            <ServiceOverview/>

        </section>
    )
}

export default ParallaxPage