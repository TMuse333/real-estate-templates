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
            const contentElement = ref.current;
            const elementTop = contentElement.getBoundingClientRect().top;
         
            const windowHeight = window.innerHeight;
    
            const offset = 350;
    
            if (elementTop < windowHeight - offset) {
                setIsAnimated(true);
                console.log('in range lujain')
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [id]);


    const animations = {
        initial:{
            x: reverse ? -50 : 50,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                opacity: '0.3s ease-in'
            }
        }

    }


    return (
        <div className="big-content-container"
        ref={ref}
        id={id}>
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
                            <motion.img src={image}/>
                    </div>

                </div>
        </div>
    )
}

export default BigContent