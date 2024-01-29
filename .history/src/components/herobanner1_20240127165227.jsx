import React from "react";
import image from '../media/image-holder.jpg'
import '../styles/herobanner1.css'
const Herobanner1 = () => {

    return (
        <div className="herobanner1-container">
            <div className="text-image-box">
                <div className="text-box">
                    <h2>Lorem ipsum, dolor </h2>
                    <h1>A Home Owners Guide</h1>
                    <p>
                    Don’t leave the sale of your family’s most valuable asset to chance. My role as your REALTOR® is to make sure that you and your home are well-prepared so that you achieve the best outcome from the sale of your home.
                    </p>
                    <button>
                        Learn More
                    </button>
                </div>
                <div>
                    
                </div>
                <img className="hero1-image"
                src={image}
                style={{
                    width:'300px',
                   
                }}
                />
            </div>
        </div>
    )
}

export default Herobanner1