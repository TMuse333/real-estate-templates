import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [bottomReached, setBottomReached] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      const contentElement = videoRef.current;
      const elementRect = contentElement.getBoundingClientRect();
    
      const windowHeight = window.innerHeight;
      const elementBottom = elementRect.bottom;
      const elementTop = contentElement.getBoundingClientRect().top;
      const offset = 200;
    
      const scrollPosition = window.scrollY;
      const scrollIncrement = 1; // You can adjust this value based on your preference
      const bottomIncrement = 5; // Increase bottom by 5% for every 1 unit of scrolling down
    
      let bottomValue = 0;
    
      // Check scroll direction
      if (event.deltaY > 0) {
        // Scrolling down
        if (elementTop < windowHeight - offset) {
          setIsPlaying(true);
          console.log('Video started!');
        } else {
          setIsPlaying(false);
        }
    
        // Calculate bottom value based on scrolling down
        bottomValue = Math.min(100, Math.max(-5, bottomValue + bottomIncrement * scrollIncrement));
    
        // Log the magnitude of the scroll
        console.log('Mouse scrolled down with magnitude:', event.deltaY);
      } else {
        // Scrolling up
        bottomValue = Math.max(-5, bottomValue - bottomIncrement * scrollIncrement);
      }
    
      // Apply the calculated bottom value to the text element
      textRef.current.style.bottom = `${bottomValue}%`;
    
      // Log when the bottom of the element touches the bottom of the viewport
      if (elementBottom <= windowHeight) {
        console.log('Bottom of the element touched the bottom of the viewport!');
        setBottomReached(true);
        bottomValue=100
    
        // Check scroll direction
        if (event.deltaY > 0) {
          // Scrolling down, disable scrolling
          document.body.style.overflow = 'hidden';
        } else {
          // Scrolling up, enable scrolling
          document.body.style.overflow = 'auto';
        }
      }
    };
    
  
    window.addEventListener('wheel', handleScroll);
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [id, setBottomReached]);
  

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const overlayStyle = {
    backgroundColor: !isPlaying ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.0)',
    transition: 'all 0.3s ease-in',
  };

  return (
    <div className="full-slide-container">
      {video && (
        <>
          <video
            ref={videoRef}
            id={id}
            className='full-slide-video'
            controls
            autoPlay={isPlaying}
            muted
            loop
          >
            <source src={video} type='video/mp4' />
          </video>
          <div className='overlay' style={overlayStyle}>
            <div ref={textRef} className='full-slide-text'>
              <h3>Jonathan Nigward</h3>
              <h1>The Best Stretch 4 ever.</h1>
            </div>
          </div>
        </>
      )}
      {image && (
        <img src={image} className='full-slide-image' alt='fullscreen-slide' />
      )}
    </div>
  );
};

export default FullScreenSlide;
