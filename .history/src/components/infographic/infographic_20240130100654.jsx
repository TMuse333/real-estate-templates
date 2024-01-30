import React,{useState} from "react";
import { designAdvantages } from "../../data/data";
import './infographic.css'



const Infographic = () => {

    

    const [activeData, setActiveData] = useState(0)

    const data = [
        designAdvantages
    ]

    const contentStyle = (index) => {
        return {
          height: expandedIndices.includes(index) ? '450px' : '230px',
          transition: 'all 0.3s ease-in',
          overflow:  expandedIndices.includes(index) ? 'scroll' : 'hidden',
        
        };
      };

      const handleContentClick = (index) => {
        setExpandedIndices((prevIndices) =>
          prevIndices.includes(index)
            ? prevIndices.filter((i) => i !== index)
            : [...prevIndices, index]
        );
      };

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

                    style={contentStyle(index)}
                    key={index}>
                        <img
                        className="info-image"
                        src={design.image}
                    
                        />
                        <h2>
                            {design.name}
                        </h2>
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