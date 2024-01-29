import React, { useEffect, useState } from "react";
import logo from '../images/q3-visuals-logo-2-no-bg.png';
import '../styles/infographic.css'
import Navbar from './navbar';
import Typed from 'typed.js';
import { Link } from "react-router-dom";
import Footer from "./footer";
import { motion,AnimatePresence } from "framer-motion";
import { designAdvantages } from "../data/data";

// import { FaArrowDown } from 'react-icons/fa';

// import '../styles/ScrollDownIndicator.css';

const Infographic = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [expandedIndices, setExpandedIndices] = useState([]);
    const [activeArray, setActiveArray] = useState(0);
    const [isHovered, setIsHovered] = useState(null)
    const [isLogoVisible, setIsLogoVisible] = useState(true);
    const [expandHidden, setExpandHidden] = useState(false)
    const handleContentClick = (index) => {
      setExpandedIndices((prevIndices) =>
        prevIndices.includes(index)
          ? prevIndices.filter((i) => i !== index)
          : [...prevIndices, index]
      );
    };
  
    useEffect(() => {
      var typed = new Typed('.future-text.info-header', {
        strings: ["Powerful, one of a kind websites"],
        typeSpeed: 35,
        backSpeed: 30,
        showCursor: false,
        cursorChar: '|',
        loop: false,
        onComplete: function (self) {
          setIsAnimated(true);
        }
      });
  
      return () => {
        typed.destroy();
      };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const threshold = 100; // Adjust this threshold based on when you want the logo to disappear
    
          setIsLogoVisible(scrollPosition <= threshold);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    


    const handleMouseEnter = (index) => {
        setIsHovered(index)
        console.log('mouse entered!')
    }

    const handleMouseLeave = () => {
        setIsHovered(null)
    }
  
    const style = {
      opacity: isAnimated ? 1 : 0,
      transition: 'opacity 0.3s ease-in',
     
    };
  
    // const imageAnimation = {
    //   hidden: {
    //     x: activeDesignAdvantages ? 200 : -200,
    //     rotateY: 100,
        
    //     opacity: 0,
    //   },
    //   visible: {
    //     x: 0,
    //     rotateY: 0,
    //     opacity: 1,
    //     transition: {
    //       duration: 0.5,
    //     },
    //   },
    // };
  
    const textAnimation = {
      hidden: {
        opacity: 0,
        transition:{
                  ease:'ease-in',
          duration:'0.3'
        }
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.5,
      
        }
      }
    };
  
  
      
  
  
  const contentStyle = (index) => {
    return {
      height: expandedIndices.includes(index) ? '450px' : '230px',
      transition: 'all 0.3s ease-in',
      overflow:  expandedIndices.includes(index) ? 'scroll' : 'hidden',
    
    };
  };

  const logoStyle = {
    opacity: isLogoVisible ? 1 : 0,
    transition: 'all 0.3s ease-in'
  }

const expandStyle = {
    opacity: expandedIndices.length === 0  && !expandHidden ?  1 : 0,
    transition: 'all 0.3s ease-in'
}  
  
  
 
    r /> */}
      </div>
    );
  };
  
  export default Infographic;