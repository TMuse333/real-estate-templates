import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const [topReached, setTopReached] = useState(false);
  const [textPosition, setTextPosition] = useState(40);


  const [bottomReached, setBottomReached] = useState(false)
  const [scrollPower, setScrollPower ] = useState(0)
  const [videoOpacity, setVideoOpacity] = useState(0.5)

  const [relativePosition, setRelativePosition] = useState('below'); // 'above', 'below', 'atTop', 'atBottom'

  const [textAtTop, setTextAtTop] = useState(false)

  const [isReturning, setIsReturning] = useState(false)



  useEffect(() => {
    const handleWheel = (event) => {
      const contentElement = videoRef.current;
      const elementRect = contentElement.getBoundingClientRect();
  
      const textElement = textRef.current;
      const textRect = textElement.getBoundingClientRect();
  
      const windowHeight = window.innerHeight;
      const elementTop = elementRect.top;
  
      // Check if 40 percent of the top of the element is in view
      const threshold = elementRect.height * 0.4;
      const is40PercentInView = elementTop < threshold;
  
      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
      const scrollMagnitude = Math.abs(event.deltaY);

      const elementBottom = elementRect.bottom;
  
      // Check if at the top and scrolling up, set scroll power to 0
      if (textAtTop && scrollDirection === 'up') {
        setScrollPower(0);
        document.body.style.overflow = 'auto'; // Set overflow to auto when at the top and scrolling up
      } else {
        // Only apply scroll power if 40 percent is in view
        setScrollPower(is40PercentInView ? (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude) : 0);
      }
  
      setTextPosition((prevTextPosition) => {
        // Calculate the new text position without clamping
        let newTextPosition = prevTextPosition + scrollPower / 20;
  
        // Check if the new text position is within the valid range
        if (newTextPosition >= 40 && newTextPosition <= 90) {
          // If within range, update the text position
          return newTextPosition;
        } else {
          // If outside the range, clamp the value
          return Math.min(Math.max(newTextPosition, 40), 90);
        }
      });
  
      // Check if the top of the element reaches the top of the viewport
      if (elementTop <= 0) {
        setTopReached(true);
        if (textPosition < 95) {
          document.body.style.overflow = 'hidden';
        }
      }
  
      // Check if the text position hits 90 and reset overflow to auto
      if (textPosition >= 90) {
        document.body.style.overflow = 'auto';
        setTextAtTop(true)
      }

      if(elementBottom < windowHeight && scrollDirection === 'up'){
        setIsReturning(true)
        console.log('return initiated')
      }

      if(isReturning && topReached){
        document.body.style.overflow = 'hidden'
      }

 
    };
  
    document.addEventListener('wheel', handleWheel);
  
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [setScrollPower, scrollPower, setTextPosition, setBottomReached, textPosition, textAtTop, setTextAtTop,setIsReturning]);
  
  
  
  
  
  
  
  



  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${videoOpacity})`,
    transition: 'all 0.3s ease-in', // Adjust the duration here
  };

  return (
    <>

    <div className="full-slide-container"
    
   >
      {video && (
        <>
          <video
 
            ref={videoRef}
            id={id}
            className="full-slide-video"
            controls
            autoPlay={isPlaying}
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="overlay" style={overlayStyle}>
            <div ref={textRef}
              style={{
                bottom: `${textPosition}%`,
              }}
              className="full-slide-text"
            >
              <h3>Jonathan Nigward</h3>
              <h1>The Best Stretch 4 ever.</h1>
            </div>
          </div>

         
        </>
      )}
      {image && <img src={image} className="full-slide-image" alt="fullscreen-slide" />}
  
    </div>

    {/* <div className='full-slide-description'>
      <h2>
        straight from the guadeloupe islands
      </h2>
      <div >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit magnam molestias facilis. Obcaecati itaque quisquam incidunt, alias dignissimos fugiat. Impedit!
        <button>button</button>
      </div>
    </div> */}

    </>
  );
};

export default FullScreenSlide;