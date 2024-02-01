import React from "react";
import image from '../../media/image-holder.jpg'
import './herobanner1.css'
import tom from '../../media/tom-header.png'
import fullBody from '../../media/smiley-tom-half.png'
const Herobanner1 = ({halfBody}) => {

    return (
        <div className="herobanner1-container">
            <div className="text-image-box2"
            style={{
                marginTop: halfBody ? '-7rem' : null
            }}>
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
                <div className={halfBody ? 'half-body-image-box' : 'image-box2'}>

             
                <img className={!halfBody ?'hero1-image' : 'hero1-image-half'}
                src={halfBody ? fullBody : tom}
                
                />
                   </div>
            </div>
        </div>
    )
}

export default Herobanner1