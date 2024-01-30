import React, { useEffect, useState } from "react";

// import './infographic.css'


import { Link } from "react-router-dom";

import { motion,AnimatePresence } from "framer-motion";

import { designAdvantages } from "../../data/data";

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
  
    // useEffect(() => {
    //   var typed = new Typed('.future-text.info-header', {
    //     strings: ["Powerful, one of a kind websites"],
    //     typeSpeed: 35,
    //     backSpeed: 30,
    //     showCursor: false,
    //     cursorChar: '|',
    //     loop: false,
    //     onComplete: function (self) {
    //       setIsAnimated(true);
    //     }
    //   });
  
    //   return () => {
    //     typed.destroy();
    //   };
    // }, []);


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
  
  

return (
    <div className="infographic-container">
      <div className="infographic-intro">
        <h1 className="future-text info-header">
          Powerful, one of a kind websites
        </h1>
        <p style={style} className="description-text ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit...
        </p>
        <div className="advantage-selector">

        </div>
      </div>

      <div className="info-image-box">
        <div className="info-image">
          <motion.img
            initial="hidden"
            src={designAdvantages.image}
            style={{
              objectPosition: 'center 40%',
            }}
          />
        </div>
        <motion.div>
          <p className="info-text-2">{designAdvantages.description}</p>
        </motion.div>
      </div>

      <div className="scroll-down-indicator" style={logoStyle}>
        {/* <FaArrowDown /> */}
      </div>

      <p
        className="description-text direction-text oscillate"
        style={expandStyle}
      >
        click to expand!
      </p>

      <AnimatePresence mode='wait'>
        <div className="info-content-wrapper">
          <motion.div>
            {designAdvantages.points.map((design, index) => (
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                key={index}
                style={contentStyle(index)}
                className={`content ${
                  isHovered === index && !expandedIndices.includes(index)
                    ? 'glow'
                    : ''
                }`}
                onClick={() => {
                  handleContentClick(index);
                  setExpandHidden(true);
                }}
              >
                <motion.img
                  src={design.image}
                  style={{ height: '100px' }}
                  alt={`Logo ${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
                />
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
                >
                  {design.name}
                </motion.h3>
                {expandedIndices.includes(index) && (
                  <p className="description-text">{design.description}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatePresence>

      <div className="advantage-selector">
        <button
          className="dark-button button"
          onClick={() => setActiveDesignAdvantages(true)}
        >
          Design
        </button>
      </div>

      <div className="closing-container">
        <p className="description-text level">It's time to level up</p>
        <h1 className="title-text outro">
          <span className='bold-700'>Elevate </span>Your Digital Presence{' '}
          <span className="bold-700">Today.</span>
        </h1>
        <p className="description-text action">
          Take action now and <span className='bold-700'>level up</span> your
          business, <span className='bold-700'>win </span> over your competition
          and <span className='bold-700'>achieve </span> your goals with Q3
          Visuals.
        </p>
        <div className="alternative">
          <p className="description-text bold-700 ">...Or do nothing</p>
          <p className="description-text">and not improve</p>
        </div>
        <div className="choice-button">
          <h3 className="description-text">
            <span className='bold-700'>The Choice Is Yours. </span>
          </h3>
          {/* <Link to='/booking'>
            <button className="button">Level Up Today</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
  };
  
  export default Infographic;