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
  const [videoOpacity, setVideoOpacity] = useState(0.5)

  useEffect(() => {
    const handleWheel = (event) => {
      const contentElement = videoRef.current;
      const elementRect = contentElement.getBoundingClientRect();
  
      const textElement = textRef.current;
      const textRect = textElement.getBoundingClientRect();
  
      const windowHeight = window.innerHeight;
      const elementTop = elementRect.top;
      const elementBottom = elementRect.bottom;
  
      // Get the direction of the wheel movement
      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

  
  
      // Get the magnitude of the wheel movement
      const scrollMagnitude = Math.abs(event.deltaY);
  
      if (elementBottom <= windowHeight && videoOpacity > 0.2) {
        setBottomReached(true);
        document.body.style.overflow = 'hidden';
      }
  
      if ((elementTop - windowHeight / 2) + 200 <= 0) {
        // Set scrollPower based on the latest state
        setScrollPower((prevScrollPower) => (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude));
        // console.log('power of the scroll:', scrollPower);
  
        // Update text position based on scrollPower
        setTextPosition((prevTextPosition) => {
          let newTextPosition = prevTextPosition + scrollPower / 20;
  
          // Prevent the text position from going higher than 90
          newTextPosition = Math.min(Math.max(newTextPosition, 40), 90);
  
          // Gradually change video opacity when text position is above 70
          if (newTextPosition >= 40) {
            const opacityChange = 0.00015 * (newTextPosition - 40); // Adjust the rate of opacity change
            setVideoOpacity((prevOpacity) => {
              const newOpacity = Math.max(0, prevOpacity - opacityChange);
              console.log('video opacity', newOpacity);
              return newOpacity;
            });
          } else {
            // Gradually increase video opacity when text position is below 50
            const opacityChange = 0.005 * (80 - newTextPosition); // Adjust the rate of opacity change
            setVideoOpacity((prevOpacity) => {
              const newOpacity = Math.min(0.5, prevOpacity + opacityChange);
              console.log('video opacity', newOpacity);
              return newOpacity;
            });
          }

          console.log('video opacity',videoOpacity)
  
          // Check if the text position has reached 90 percent
          if (newTextPosition >= 90) {
            // Set body overflow back to auto
            document.body.style.overflow = 'auto';
          }
  
          return newTextPosition;
        });
      }
    };
  
    // Add the wheel event listener to the document
    document.addEventListener('wheel', handleWheel);
  
    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [setScrollPower, scrollPower, setTextPosition, setBottomReached]);
  
  
  



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

    <div className='full-slide-description'>
      <h2>
        straight from the guadeloupe islands
      </h2>
      <div >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit magnam molestias facilis. Obcaecati itaque quisquam incidunt, alias dignissimos fugiat. Impedit!
        <button>button</button>
      </div>
    </div>

    </>
  );
};

export default FullScreenSlide;