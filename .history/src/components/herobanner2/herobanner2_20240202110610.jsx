import React from "react";
import fullBody from '../../media/smiley-tom-half.png'

const Herobanner2 = () => {

    

    return (
        <div className="herobanner2-container">

            <div className="hero2-content-box">
                <div className="hero2-text-box">
                 <h2>Lorem, ipsum dolor.</h2>
                 <h1>A Home Owners Guide</h1>
                 <p>
                 Don’t leave the sale of your family’s most valuable asset to chance. My role as your REALTOR® is to make sure that you and your home are well-prepared so that you achieve the best outcome from the sale of your home.
                 </p>
                </div>
                <img className="hero2-image"
                src={fullBody}/>
            </div>
            
        </div>
    )
}

export default Herobanner2