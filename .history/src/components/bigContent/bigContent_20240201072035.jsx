import React from "react";
import image from '../../media/image-holder.jpg'
import './bigContent.css'

const BigContent = ({reverse}) => {

    return (
        <div className="big-content-container">
                <div className=>
                    <div 
                    className={!reverse ? 'text-container' : 'text-container reverse-text'}
                    >
                        <h2 className="title-text">
                            Title here
                        </h2>
                        <p className="description-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quas minima sapiente unde ipsam inventore enim ducimus.
                        </p>
                        <ul>
                            <li>sales</li>
                            <li>Studies</li>
                            <li>Info</li>
                            <li>Data</li>
                            <li>Infographics</li>
                        </ul>

                    </div>
                    <div className={!reverse ? 'image-container' : 'image-container reverse-image' }>
                            <img src={image}/>
                    </div>

                </div>
        </div>
    )
}

export default BigContent