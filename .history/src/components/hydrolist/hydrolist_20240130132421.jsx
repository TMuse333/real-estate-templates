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

    const contentStyle = (index) => {
        const isExpanded = expandedIndices.includes(index);
        return {
          height: isExpanded ? '230px' : '0',
          transition: isExpanded
            ? 'height 0.3s ease-in, opacity 0.5s ease-in'
            : 'height 0.3s ease-in, opacity 0.5s ease-in 0.3s',
          overflow: isExpanded ? 'scroll' : 'hidden',
        //   opacity: isExpanded ? '1' : '0',
        
        };
      };
      
      


    return (
        <div className="hydrolist-container">
            <div className="hydro-list">
               {data.map((data,index) => (
                <div className="hydro-element"
                key={index}
                onClick={()=>handleContentClick(index)}
                >

                    <div className="name-logo-box"
                        <h2>
                            {data.name}
                        </h2>

            

     
                     
<section className="hydro-expanded"
 style={contentStyle(index)}>


                  <p
                  className=""
                 
                >
                    {data.description}
                  </p>
                  <p className="hydro-p">learn more</p>
                  </section>
                       

                             
                  
                    </div>

               ))}

{/* <h2>sliem</h2> */}

            </div>
        </div>
    )
}

export default HydroList