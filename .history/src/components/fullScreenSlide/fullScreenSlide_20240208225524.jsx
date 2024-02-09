import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const [topReached, setTopReached] = useState(false);
  const [textPosition, setTextPosition] = useState(40);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [bottomReached, setBottomReached] = useState(false)
  const [scrollPower, setScrollPower ] = useState(0)

  useEffect(() => {
    const handleWheel = (event) => {
      // Get the direction of the wheel movement
      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
  
      // Get the magnitude of the wheel movement
      const scrollMagnitude = Math.abs(event.deltaY);
  
      // Set scrollPower to the negative magnitude if scrolling up and positive if scrolling down
      setScrollPower(scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude);
      console.log(scrollPower);
    };
  
    // Add the wheel event listener to the document
    document.addEventListener('wheel', handleWheel);
  
    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [setScrollPower]); // Include setScrollPower in the dependency array to avoid lint warnings
  

  

 


  useEffect(() => {
    let prevScrollY = window.scrollY;
  
    const handleScroll = (event) => {
      const contentElement = videoRef.current;
      const elementRect = contentElement.getBoundingClientRect();
  
      const textElement = textRef.current;
      const textRect = textElement.getBoundingClientRect();
  
      const windowHeight = window.innerHeight;
      const elementTop = elementRect.top;
      const elementBottom = elementRect.bottom;
  
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - prevScrollY;
  
      const scrollDirection = deltaY > 0 ? 'down' : 'up';
      const scrollMagnitude = Math.abs(event.deltaY) / 9;
  
      // Check if at least 50 percent of the top of the element is in view
      if ((elementTop - windowHeight / 2) + 225 <= 0) {
        setTextPosition((prevTextPosition) => {

          // const newTextPosition = prevTextPosition + scrollPower;

          
      
          // Log the adjustment to the text position
          // console.log('Adjustment to Text Position:', scrollPower);
      
          // Check if the text position has reached 90 percent
          if (newTextPosition >= 90) {
            // Set body overflow back to auto
            document.body.style.overflow = 'auto';
          }
      
          return newTextPosition;
        });
      }
      
  
      // Check if the bottom of the element reaches the bottom of the viewport
      if (elementBottom <= windowHeight) {
        setBottomReached(true)
        document.body.style.overflow = 'hidden'
        
      } else {
        
      }
  
      prevScrollY = currentScrollY;
    };
  
    window.addEventListener('wheel', handleScroll);
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [id, setScrollPosition,setBottomReached]);
  
  
  
  
  
  




  

  const textStyle = {
    transition: 'all 0.02s ease-in',
  };

  const style = {
    overflow: bottomReached ? 'hidden' : 'hidden',

  }



  const overlayStyle = {
    backgroundColor: !isPlaying ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease-in', // Adjust the duration here
  };

  return (
    <div className="full-slide-container"
    style={style}
   >
      {video && (
        <>
          <video
          style={style}
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
  );
};

export default FullScreenSlide;