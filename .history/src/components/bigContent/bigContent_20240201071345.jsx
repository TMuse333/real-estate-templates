import React from "react";
import image from '../../media/image-holder.jpg'
import './bigContent.css'

const BigContent = () => {

    return (
        <div className="big-content-container">
                <div className="content-text-container">
                    <div className="text-container">
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
                    <div className="image-container ">
                            <img src={image}/>
                    </div>

                </div>
        </div>
    )
}

export default BigContent