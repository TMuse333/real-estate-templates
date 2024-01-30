import React,{useState} from "react";
import { designAdvantages } from "../../data/data";



const Infographic = () => {

    const [activeData, setActiveData] = useState(0)

    const data = [
        designAdvantages
    ]

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

            <div className="info-boxes">
                {data[activeData].points.map((design,index) => (
                    <div className="info"
                    key={index}>
                        <img
                        className="info-image"
                        src={design.image}
                        // style={{
                        //     height:'40px'
                        // }}
                        />
                        <p>
                            {design.description}
                        </p>
                        </div>
                ))}
            </div>

        </div>
    )
}

export default Infographic