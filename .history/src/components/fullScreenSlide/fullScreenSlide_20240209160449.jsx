import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const [topReached, setTopReached] = useState(false);
  const [textPosition, setTextPosition] = useState(30);


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

      const elementInView = elementTop < windowHeight && elementBottom > 0;

      setScrollPower((prevScrollPower) => {
       
        return  (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude);
      });

      console.log('scroll power',sc)


     
    };

    document.addEventListener('wheel', handleWheel);

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