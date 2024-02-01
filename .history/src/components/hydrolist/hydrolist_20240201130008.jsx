import React,{useState, useEffect} from "react";
import './hydrolist.css'
import { designAdvantages } from "../../data/data";
import { docsIntro } from "../../data/data";
const HydroList = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const [isHovered, setIsHovered] = useState(null)

    const handleMouseEnter = (index) => {
        setIsHovered(index)
    }

    const handleMouseLeave = () => {
        setIsHovered(null)
    }

    const handleContentClick = (index) => {
       
        
      };


      const hydroStyle = (index) => {
        const hovered = isHovered === index

        return (
            {
                backgroundColor: hovered ? 'rgba(48, 115, 160)' : null,
               
                transition: 'all 0.3s ease-in',
                borderBottom: hovered ? null : '2px solid rgb(22, 8, 103)',
                border: hovered? '2px solid rgb(22, 8, 103)' : null,

            }
        )
      }

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
        <>
        <div className="hydro-wrapper">

<h2 style={{
    marginLeft:'1rem',
    color:'white'
}}>Documentation</h2>

              <p className="docs-intro">
            {docsIntro}
        </p>
   
        <div className="hydrolist-container">

            <div className="hydro-list">
               {data.map((data,index) => (
                <div className="hydro-element"
                key={index}
                onClick={()=>handleContentClick(index)}
                style={hydroStyle(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                >

<div className="name-logo-box">
              <h2>{data.name}</h2>
              <div className="plus-minus">
              
              <div
                className={`hydro-line ${expandedIndices.includes(index) ? "clicked" : ""}`}
              />
                 <div
                className={`hydro-line ${expandedIndices.includes(index) ? "clicked" : ""}`}
             />
              
              </div>
            </div>

            

     
                     
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



            </div>
        </div>
        </div>
        </>
    )
}

export default HydroList