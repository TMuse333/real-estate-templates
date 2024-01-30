import React from "react";
import { designAdvantages } from "../../data/data";



const Infographic = () => {

    return (
        <div className="infographic-container">

            <div className="infographic-header">
                <h1 className="title-text">
                    Documentation
                </h1>
                <p className="description-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta qui laudantium laboriosam. Quas repellat ex minima praesentium, natus quo.
                </p>

            </div>

            <div className="documents-boxes">
                {designAdvantages.points.map((design,index) => (
                    <div className="document"
                    key={index}>
                        <img
                        src={design.image}
                        />
                        
                        </div>
                ))}
            </div>

        </div>
    )
}

export default Infographic