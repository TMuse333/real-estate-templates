import React from "react";
import image from '../../media/image-holder.jpg'
import './herobanner1.css'
import tom 
const Herobanner1 = () => {

    return (
        <div className="herobanner1-container">
            <div className="text-image-box2">
                <div className="text-box2">
                    <h2>Lorem ipsum, dolor </h2>
                    <h1 id="hero1-title">A Home Owners Guide</h1>
                    <p>
                    Don’t leave the sale of your family’s most valuable asset to chance. My role as your REALTOR® is to make sure that you and your home are well-prepared so that you achieve the best outcome from the sale of your home.
                    <br/>
                    <br/>
                    <button>
                        Learn More
                    </button>
                    </p>
                   
                </div>
                <div>
                    
                </div>
                <div className="image-box2">

             
                <img className="hero1-image"
                src={image}
                
                />
                   </div>
            </div>
        </div>
    )
}

export default Herobanner1