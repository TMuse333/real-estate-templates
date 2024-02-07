import React from "react";
import FullScreenSlide from "../fullScreenSlide/fullScreenSlide";
import aboubacar from '../../media/aboubacar-5-fire.png'
import './parallaxpage.css'
import gokuJiren from '../../media/goku-vs-jiren.jpg'
import stepBack from 'src/media/44%-stepback3.mp4'

const ParallaxPage = () => {


    return (
        <section className="parallax-page-container">
          <div className="parallax-page-herobanner">
          
            <img src={gokuJiren}/>

          </div>
            <FullScreenSlide
            video={/>
        </section>
    )
}

export default ParallaxPage