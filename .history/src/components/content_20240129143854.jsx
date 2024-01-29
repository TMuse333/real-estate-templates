import React, { useEffect, useRef, useState } from "react";
import '../styles/content.css'

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextFormat from "./textFormat";

const Content = ({ title, image, description, rev, link, linkText, hasTitle, id, hasAnimation, hasTilt,
customText }) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [tiltAngle, setTiltAngle] = useState(30);
    const contentRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const contentElement = contentRef.current;
            const elementTop = contentElement.getBoundingClientRect().top;
            const elementHeight = contentElement.clientHeight;
            const windowHeight = window.innerHeight;
    
            // Calculate the percentage of the element's bottom in view
            const visiblePercentBottom = Math.max(0, Math.min(100, (windowHeight - (elementTop + elementHeight)) / windowHeight * 100));
    
            // Check if only the bottom 33% of the element is in view
            const bottomThirdInView = visiblePercentBottom >= 67;
    
            // Calculate the percentage of the element in view
            const visiblePercent = Math.max(0, Math.min(100, (windowHeight - elementTop) / windowHeight * 100));
    
            // Gradually decrease the tilt angle from 30 to 0 as 60% of the element becomes visible
 
            const newTiltAngle= 
            // bottomThirdInView ? (visiblePercent / 90) * 10 :
            Math.max(0, 30 - (visiblePercent / 60) * 30);
    
            console.log("Visible Percentage:", visiblePercent);
            console.log("Tilt Angle:", newTiltAngle);
            setTiltAngle(newTiltAngle);
            console.log(bottomThirdInView)
    
            const offset = 350;
    
            if (elementTop < windowHeight - offset) {
                setIsAnimated(true);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [id]);
    
    
    
    
    
    
    
    

    const animations = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };

    const textAnimations = {
        hidden: {
            opacity: 0,
            x: rev ? -50 : 50
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: 0.6
            },
            x: 0
        }
    };



  
    

    return (
        <div className="content-container" ref={contentRef} id={id}
        style={hasTilt ? { transform: `perspective(1000px) rotateX(${tiltAngle}deg)` } : null}

    >
            <div className=
            {`image-text-box 
            ${rev ? 'reverse' : 'image-text-box'}`}
            >
                {rev ? (
                    <div className="description-box">
                        <p className='description-text'>
                       {/* {description} */}
  
                          <br/>
                            {link != null && 
                                <Link to={link}>
                                    <button className="button">{linkText}</button>
                                </Link>
                            }
                        </p>
                    </div>
                ) : null}

                <div className="image-box">
                    <h1 className="title-text">{title}</h1>
                    <motion.img
                        src={image}
                        loading="lazy"
                        className='content-image'
                        initial={hasAnimation ? animations.hidden : animations.visible}
                        animate={isAnimated && hasAnimation ? animations.visible : null}
                    />
                </div>

                {rev ? null : (
                    <div className="description-box">
                        {hasTitle && <h2 className="title-text">{title}</h2>}

                        {customText ? <>
                        {customText }</> : (
   <motion.p
   className='description-text'
   initial={hasAnimation ? textAnimations.hidden : textAnimations.visible}
   animate={isAnimated && hasAnimation ? textAnimations.visible : null}
>
  {description}
   <br/>
   {link != null && 
       <Link to={link}>
           <button className="button">{linkText}</button>
       </Link>
   }
</motion.p>
                        )}
                     

                
                                          
                    </div>
                )}
            </div>
        </div>
    );
}

export default Content;