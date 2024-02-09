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

  const [scrolled, setScrolled] = useState(false)
  const [relativePosition, setRelativePosition] = useState('below'); // 'above', 'below', 'atTop', 'atBottom'

useEffect(() => {
  const handleWheel = (event) => {
    const contentElement = videoRef.current;
    const elementRect = contentElement.getBoundingClientRect();
    const textElement = textRef.current;
    const textRect = textElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = elementRect.top;
    const elementBottom = elementRect.bottom;
    const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
    const scrollMagnitude = Math.abs(event.deltaY);

    // Set the initial multiplier
    let multiplier = 1;

    // Check if the text is in the bottom half
    if (textPosition >= 0 && textPosition < 50) {
      // When scrolling down in the bottom half, use a slower ascent (0.5 multiplier)
      multiplier = scrollDirection === 'down' ? 0.5 : 1;
    } else if (textPosition >= 50 && textPosition <= 95) {
      // When scrolling up in the upper half, use a faster ascent (2.8 multiplier)
      multiplier = scrollDirection === 'up' ? 2.8 : 1;
    }

    // Adjust scroll power based on the multiplier
    setScrollPower((prevScrollPower) => multiplier * (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude));

    // Check if the bottom of the element is below the viewport
    if (elementBottom <= windowHeight) {
      // Set bottomReached and hide overflow
      setBottomReached(true);
      document.body.style.overflow = 'hidden';
    } else if (elementTop >= 0 && scrollDirection === 'up') {
      // Set topReached and hide overflow when scrolling up and the top of the element is at or above the viewport
      setTopReached(true);
      document.body.style.overflow = 'hidden';
    }

    // Update text position based on scrollPower
    setTextPosition((prevTextPosition) => {
      let newTextPosition = prevTextPosition + scrollPower / 20;
      newTextPosition = Math.min(Math.max(newTextPosition, 0), 95);

      // Gradually change video opacity when text position is above 40
      if (newTextPosition >= 40) {
        const opacityChange = 0.00015 * (newTextPosition - 40);
        setVideoOpacity((prevOpacity) => Math.max(0, prevOpacity - opacityChange));
      } else {
        // Gradually increase video opacity when text position is below 50
        const opacityChange = 0.005 * (80 - newTextPosition);
        setVideoOpacity((prevOpacity) => Math.min(0.5, prevOpacity + opacityChange));
      }

      // Check if the text position has reached 90 percent
      if (newTextPosition >= 90) {
        // Set body overflow back to auto
        document.body.style.overflow = 'auto';
      }

      return newTextPosition;
    });
  };

  // Add the wheel event listener to the document
  document.addEventListener('wheel', handleWheel);

  // Clean up the event listener when the component is unmounted
  return () => {
    document.removeEventListener('wheel', handleWheel);
  };
}, [setScrollPower, scrollPower, setTextPosition, setBottomReached, textPosition]);

  
  
  



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