import React from "react";
import FullScreenSlide from "../fullScreenSlide/fullScreenSlide";
import aboubacar from '../../media/aboubacar-5-fire.png'

const ParallaxPage = () => {


    return (
        <section className="parallax-page-container">
          <div className="parallax-page-herobanner">
            <h1>Aboubacar</h1>
            <h2>The most dominant 2k player of all time</h2>
            {/* <img src={aboubacar}/> */}

          </div>
            <FullScreenSlide/>
        </section>
    )
}

export default ParallaxPage