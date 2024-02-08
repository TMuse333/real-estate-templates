import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [bottomReached, setBottomReached] = useState(false);
const [topReached,setTopReached] =  useState(false)
 

useEffect(() => {
  let prevScrollY = window.scrollY;

  const handleScroll = (event) => {
      const contentElement = videoRef.current;
      const elementRect = contentElement.getBoundingClientRect();

      const windowHeight = window.innerHeight;
      const elementTop = elementRect.top;

      // Calculate the direction and magnitude
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - prevScrollY;

      // Detect scroll direction
      const scrollDirection = deltaY > 0 ? 'down' : 'up';

      // Detect scroll magnitude
      const scrollMagnitude = Math.abs(deltaY);

      // Log direction and magnitude
      console.log('Scroll Direction:', scrollDirection);
      console.log('Scroll Magnitude:', scrollMagnitude);

      // Check if the top of the element has reached the top of the viewport
      if (elementTop <= 0) {
          console.log('Top of the element touched the top of the viewport!');
          setTopReached(true);

          // Check scroll direction and disable scrolling
          if (scrollDirection === 'down') {
              document.body.style.overflow = 'hidden';
          }
      } else {
          // Top of the element is not at the top of the viewport, enable scrolling
          document.body.style.overflow = 'auto';
          setTopReached(false);
      }

      prevScrollY = currentScrollY;
  };

  window.addEventListener('wheel', handleScroll);

  return () => {
      window.removeEventListener('wheel', handleScroll);
  };
}, [id, topReached]);



  

 

  const overlayStyle = {
    backgroundColor: !isPlaying ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease-in', // Adjust the duration here
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
