import React,{useState, useEffect} from "react";
import './hydrolist.css'
import { designAdvantages } from "../../data/data";

const HydroList = () => {

    const [expandedIndices, setExpandedIndices] = useState([]);

    const handleContentClick = (index) => {
        setExpandedIndices((prevIndices) =>
          prevIndices.includes(index)
            ? prevIndices.filter((i) => i !== index)
            : [...prevIndices, index]
        );
      };

    const data =   designAdvantages.points

    


    return (
        <div className="hydrolist-container">
            <div className="hydro-list">
               {data.map((data,index) => (
                <div className="hydro-element"
                key={index}
                onClick={()=>handleContentClick(index)}>
                        <h2>
                            {data.name}
                        </h2>
                        {expandedIndices.includes(index) &&
                  <p
                  className="description-text"
                 
                >
                    {data.description}
                  </p>}
                    </div>
               ))}

            </div>
        </div>
    )
}

export default HydroList