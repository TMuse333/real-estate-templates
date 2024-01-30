import React,{useState} from "react";
import { designAdvantages } from "../../data/data";
import './infographic.css'
import Navbar from "../navbar";


const Infographic = () => {

    const [expandedIndices, setExpandedIndices] = useState([]);

    const [activeData, setActiveData] = useState(0)

    const data = [
        designAdvantages
    ]

    const contentStyle = (index) => {
        return {
          height: expandedIndices.includes(index) ? '450px' : '230px',
          transition: 'height 0.3s ease-in',
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
        <>

        <Navbar/>

        <div className="infographic-container">

            <div className="infographic-header">
                <h1 className="title-text">
                    Documentation
                </h1>
                <p className="description-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta qui laudantium laboriosam. Quas repellat ex minima praesentium, natus quo.
                </p>

                <p className="description-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta qui laudantium laboriosam. Quas repellat ex minima praesentium, natus quo.
                </p>

            </div>

            <div className="info-boxes">
                {data[activeData].points.map((design,index) => (
                    <div className="info"

                    style={contentStyle(index)}
                    key={index}
                    onClick={() => {
                        handleContentClick(index);
                     
                      }}
                    >
                        <img
                        className="info-image"
                        src={design.image}
                    
                        />
                        <h2>
                            {design.name}
                        </h2>
                        {expandedIndices.includes(index) &&
                  <p
                  className="description-text"
                 
                >
                    {design.description}
                  </p>}
                        </div>
                ))}
            </div>

            <section className="infographic-closing">
                        <h2 className="title-text">
                            Lorem, ipsum dolor.
                        </h2>
                        
            </section>

        </div>
        </>
    )
}

export default Infographic