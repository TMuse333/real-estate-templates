import React, { useEffect, useRef, useState } from "react";

import '../styles/serviceOverview.css'

import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom"


const ServiceOverview = () => {
  const servicesRef = useRef();
  const [isAnimated, setIsAnimated] = useState(false);
  const [showScrollDownAnimation, setShowScrollDownAnimation] = useState(true);

  const links = [
    {
      dest: 'about-ceo',
      name: 'About',
    },
    {
      dest: 'about-company',
      name: 'Services',
    },
    {
      dest: 'portfolio',
      name: 'Our Work',
    },
    {
      dest: 'contact',
      name: 'Contact',
    },
  ];

  useEffect(() => {
    // window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const servicesOffset = servicesRef.current.offsetTop + 600;

      if (scrollPosition > servicesOffset ) {
        setIsAnimated(true);
        setShowScrollDownAnimation(false);
      } else {
        setIsAnimated(false);
        setShowScrollDownAnimation(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

    <div ref={servicesRef} className=''>
      <div className="services-container">
      
        <div className="background-intro">
          <h1 className="title-text">Powerful, Customizable
          web dev</h1>
          <p className="description-text">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nulla rem facere tenetur quae error et, odit aliquam sed corrupti fuga. Magni dolor autem ex tempore totam tenetur sint quas!
          </p>
       
        </div>
        <div className="company-services">
          <h1 className="title-text">Here are key aspects of our work that help us stand out from the rest</h1>
          <p className="description-text"></p>
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={showScrollDownAnimation ? { opacity: 1, y: 10 } : { opacity: 0, y: -10 }}
            transition={{ duration: 1, repeat: showScrollDownAnimation ? Infinity : null, repeatType: 'mirror' }}
            className="scroll-down-animation"
          >
            &#8595; Scroll down &#8595;
          </motion.div>
          <div className="services-box">
            {designAdvantages.points.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.4 }}
                className="service"
              >
                <h2 className="title-text">{advantage.name}</h2>
                <p className="description-text">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

       
         
          

              <div className="details-boxes">

              

          <div className="details-box-1">

          <h2>Our approach</h2>
          <h1 className="title-text">
            All around web dev
            </h1>
            <div className="line">
              
              </div>
              <p className="description-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam laudantium ipsum labore dolores sit eius, placeat, culpa quisquam fuga architecto sequi quod, doloremque mollitia ab explicabo? Ducimus nisi cupiditate ipsum dolor alias sint debitis voluptas. Voluptatum autem expedita officia.
                <br/><br/>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum molestias nisi distinctio ab. Veniam, omnis dolor? Saepe delectus facilis fugit!
                <br/><br/>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta voluptas neque doloremque aliquid sit mollitia quisquam vero quaerat maxime.
                </p> 

                      </div>

          <div className="details-box-2">
                  <h2 className="title-txt">
                    We work fast.
                  </h2>
                  <p className="description-txt">
                 Speed is crucial in todays world, our processes
                 for web design have been cultivated over
                 countless hours of focused work.
                 When you hire us, we apply our razor
                 sharp focus to ensure your product
                 is delivered quickly with high quality.

                  </p>

                  <h2 className="title-txt">
                    Think outside the box
                  </h2>
                
                    <p className="description-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iusto eius architecto accusantium ducimus provident quaerat illum qui esse voluptatem magnam! Debitis, autem! Quia dignissimos delectus cum laudantium accusantium omnis, sint explicabo neque doloremque! Sit eum recusandae non quisquam, corporis hic perspiciatis doloribus ipsum, esse, nemo odio ipsa quo nesciunt!
                    </p>

                    <h2 className='t'>
                         Plan it out
                    </h2>

                    <p className="description-text">
                      We make a plan, and execute it. Simple if you
                      want to learn more about our tenets of work,
                      click below
                      
                    </p>
  
                </div>
               
              </div>

        <div className="closing-container">
          <p className="description-text level">
            It's time to level up
          </p>
          <h1 className="title-text outro">
            <span className='bold-700'>Elevate </span>Your Digital Presence <span className="bold-700">Today.</span>
          </h1>
          <p className="description-text action">
            Take action now and <span className='bold-700'>level up</span> your business, <span className='bold-700'>
            win </span> over your competition and <span className='bold-700'>
              achieve </span> your goals with Q3 Visuals.</p>
          <div className="alternative">
            <p className="description-text bold-700 ">
              ...Or do nothing
            </p>
            <p className="description-text">and not improve</p>
          </div>
          <div className="choice-button">
            <h3 className="description-text"><span className='bold-700'>
              The Choice Is Yours. </span></h3>
            <Link to='/booking'>
              <button className="button">
                Level Up Today
              </button>
            </Link>
          </div>
        </div>
       
       
      </div>
    </div>
    </>
  );
};

export default ServiceOverview;