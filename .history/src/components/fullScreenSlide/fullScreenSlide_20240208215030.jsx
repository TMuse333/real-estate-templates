import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const [topReached, setTopReached] = useState(false);
  const [textPosition, setTextPosition] = useState(50);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [bottomReached, setBottomReached] = useState(false)


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
      const scrollMagnitude = Math.abs(event.deltaY) / 8;

      
  
      setTextPosition((prevTextPosition) => {
        // Update the text position based on scroll direction and magnitude
        const newTextPosition = prevTextPosition + (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude);
  
        // Check if the text position has reached 90 percent
        if (newTextPosition >= 90) {
          // Set body overflow back to auto
          document.body.style.overflow = 'auto';
        }
  
        return newTextPosition;
      });
  
      // Do something with the direction and magnitude, for example, log them
      console.log('Scroll Direction:', scrollDirection);
      console.log('Scroll Magnitude:', scrollMagnitude);
  
      const containerTop = elementRect.top;
      const textTop = textRect.top - containerTop;
      const containerHeight = elementRect.height;
      const textPercentage = (textTop / containerHeight) * 100;
  
      console.log('Text Percentage:', textPercentage);
  
      setScrollPosition(scrollMagnitude);
      console.log('Scroll Position:', scrollPosition);
  
      prevScrollY = currentScrollY;
    };
  
    window.addEventListener('wheel', handleScroll);
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [id, setScrollPosition]);
  
  
  
  


  useEffect(()=> {
    if(bottomReached){
      document.body.style.overflow = 'hidden'
    }
  },[bottomReached])

  const handleWheel = (event) => {
    // Get the magnitude of the wheel movement
    const scrollMagnitude = Math.abs(event.deltaY);

    // Log the magnitude of the wheel movement
    console.log('Wheel Magnitude:', scrollMagnitude);

    // Update the state with the wheel magnitude (if needed)
    // setWheelMagnitude(scrollMagnitude);
  };

  useEffect(() => {
    // Add the wheel event listener to the document
    document.addEventListener('wheel', handleWheel);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);


  const textStyle = {
    transition: 'all 0.02s ease-in',
  };

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