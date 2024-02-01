import React,{useState,useEffect} from "react";
import image from '../../media/image-holder.jpg'
import TextFormat from "../textFormat";
import './bigContent.css'
import { motion } from "framer-motion";
import { useRef } from "react";


const BigContent = ({reverse,id}) => {

    const [isAnimated, setIsAnimated] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const handleScroll = () => {
            const contentElement = contentRef.current;
            const elementTop = contentElement.getBoundingClientRect().top;
            const elementHeight = contentElement.clientHeight;
            const windowHeight = window.innerHeight;
    
            // Calculate the percentage of the element's bottom in view
            
            // Calculate the percentage of the element in view
           
    
            // Gradually decrease the tilt angle from 30 to 0 as 60% of the element becomes visible
 
           
    
           
    
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


    return (
        <div className="big-content-container"
        ref={recusandae}>
                <div className={`content-text-container ${reverse ? 'reverse-container' : ''}`}>
                    <div 
                    className={!reverse ? 'text-container' : 'reverse-text'}>
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