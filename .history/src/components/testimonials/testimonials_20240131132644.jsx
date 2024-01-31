import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './testimonials.css';
// import { testimonials } from "./skillDesc";

const Testimonials = () => {


const testimonials = [
    {
        author:"Timothy",
        quote:"It was very easy to get a wonderful with Chris and Rooftight! I have my dream home thanks to them.",
        effect:'Effect',
        title:'Happy home Owner'
    },
    {
        author:"Johnny",
        quote:"Rooftight builds some fanstastic ",
        effect:'Effect',
        title:'Happy home Owner'
    },
    {
        author:"Tyrone",
        quote:"It was very easy to get a wonderful with Chris and Rooftight! I have my dream home thanks to them.",
        effect:'Effect',
        title:'Happy home Owner'
    }
]

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-container">
   <div >
   <h2 className="title-text">We <span className="bold-700">Deliver</span>  <span className="bold-700">Results</span> </h2>
      <p className='description-text'>Our clients have experienced <span className="bold-700">monumental success</span> in elevating their digital presence with our expertly crafted websites. Transform your brand's online identity today  </p>
   </div>
     
      <div className="arrow-container">
      <IoIosArrowBack className="arrow arrow-left" onClick={prevTestimonial} />
     
     
    
      <div className="testimonial">
       
        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="quote"
            initial={{ opacity: 0,x: -10 }}
            animate={{ opacity: 1, x:0 }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].quote}
          </motion.p>
        </AnimatePresence>

        {/* <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="effect"
           initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
             >
            {testimonials[currentTestimonial].effect}
          </motion.p>
        </AnimatePresence> */}

        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="author"
           initial={{ opacity: 0, y:30 }}
            animate={{ opacity: 1, y:0,transition: { delay: 0.7 } }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].author}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="title"
          initial={{ opacity: 0, y:30 }}
          animate={{ opacity: 1, y:0,transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].title}
          </motion.p>
        </AnimatePresence>

        
      </div>
     
      <IoIosArrowForward className="arrow arrow-right" onClick={nextTestimonial} />
      </div>
     
    </div>
  );
}

export default Testimonials;