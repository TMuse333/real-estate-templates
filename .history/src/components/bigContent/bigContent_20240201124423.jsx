import React,{useState,useEffect} from "react";
import image from '../../media/image-holder.jpg'
import TextFormat from "../textFormat";
import './bigContent.css'
import { motion } from "framer-motion";


const BigContent = ({reverse}) => {

    const [isAnimated, setIsAnimated] = useState(false)


    return (
        <div className="big-content-container">
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