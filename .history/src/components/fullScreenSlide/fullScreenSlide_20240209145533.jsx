import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const [topReached, setTopReached] = useState(false);
  const [textPosition, setTextPosition] = useState(0);


  const [bottomReached, setBottomReached] = useState(false)
  const [scrollPower, setScrollPower ] = useState(0)
  const [videoOpacity, setVideoOpacity] = useState(0.5)

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

      setScrollPower((prevScrollPower) => {
        const multiplier = scrollDirection === 'up' && textPosition >= 50 && textPosition <= 95 ? 5.8 : 1;
        return multiplier * (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude);
      });

      if (elementBottom <= windowHeight) {
        setBottomReached(true);
        console.log('bottom touched playa!')
        if (relativePosition === 'atBottom') {
          document.body.style.overflow = 'hidden';
          console.log('hiding overflow')
        }
      }

      setTextPosition((prevTextPosition) => {
        let newTextPosition = prevTextPosition + scrollPower / 20;
        newTextPosition = Math.min(Math.max(newTextPosition, 0), 95);

        // Determine relative position
        if (newTextPosition >= 40 && newTextPosition < 90 ) {
          setRelativePosition('above');
          console.log('text is above half!')
        } else if (newTextPosition >= 0 && newTextPosition < 50) {
          setRelativePosition('atBottom');
          console.log('text is at bottom half!')
        } else if (newTextPosition >= 90) {
          setRelativePosition('atTop');
          console.log('text is at top!')
        } else {
          setRelativePosition('below');
        }

        console.log('text position',textPosition)

        // Gradually change video opacity when text position is above 40
        if (newTextPosition >= 40) {
          const opacityChange = 0.00015 * (newTextPosition - 40);
          setVideoOpacity((prevOpacity) => Math.max(0, prevOpacity - opacityChange));
        } else {
          // Gradually increase video opacity when text position is below 50
          const opacityChange = 0.005 * (80 - newTextPosition);
          setVideoOpacity((prevOpacity) => Math.min(0.5, prevOpacity + opacityChange));
        }

        if (newTextPosition >= 90) {
          document.body.style.overflow = 'auto';
        }

        return newTextPosition;
      });
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