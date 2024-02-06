import React from "react";
import './slideshow.css'


const Slideshow = ({images}) => {

    return (
        <section className="slideshow-container">
            <div className="slideshow-text">


            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum soluta quidem amet doloribus repudiandae culpa mollitia, rerum aliquid eius.</p>

            </div>

            <img src={image}
            className="slideshow-image"/>

      

        </section>
    )
}

export default Slideshow