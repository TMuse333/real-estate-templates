import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [topReached, setTopReached] = useState(false);
  const [bottomReached, setBottomReached] = useState(false);
  const [textPosition, setTextPosition] = useState(50);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [overflowHidden, setOverflowHidden] = useState(false);
  const [disableOverflow, setDisableOverflow] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const contentElement = videoRef.current;
      const elementRect = contentElement.getBoundingClientRect();

      const windowHeight = window.innerHeight;
      const elementTop = elementRect.top;
      const elementBottom = elementRect.bottom;

      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - prevScrollY;

      const scrollDirection = deltaY > 0 ? 'down' : 'up';
      const scrollMagnitude = Math.abs(deltaY) / 10;

      if (elementTop <= 0) {
        console.log('Top of the element touched the top of the viewport!');
        setTopReached(true);
        if (disableOverflow) {
          setOverflowHidden(false); // Disable overflow when text reaches 90 to the top
        }
      }

      if (elementBottom <= windowHeight) {
        console.log('Bottom of the element touched the bottom of the viewport!');
        setBottomReached(true);
        setOverflowHidden(true);
        document.body.style.overflow = 'hidden'; // Set overflow to hidden
      }

      if (topReached) {
        setTextPosition((prevTextPosition) => {
          return prevTextPosition + (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude);
        });

        // Disable overflow when text position is 90 or more
        if (textPosition >= 90) {
          setDisableOverflow(true);
        } else {
          setDisableOverflow(false);
        }
      }

      setScrollPosition(scrollMagnitude);
      console.log(scrollPosition);

      prevScrollY = currentScrollY;
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [id, topReached, setScrollPosition, textPosition, disableOverflow]);

  const containerStyle = {
    overflow: overflowHidden ? 'hidden' : 'visible',
     // Apply overflow: hidden when overflowHidden is true
  };

  return (
    <div className="full-slide-container" style={containerStyle}>
      <div className='full-slide-video-container'>
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
      </div>
      <div className="overlay">
        <div
          style={{
            bottom: `${textPosition}%`,
          }}
          className="full-slide-text"
        >
          <h3>Jonathan Nigward</h3>
          <h1>The Best Stretch 4 ever.</h1>
        </div>
      </div>
    </div>
  );
};

export default FullScreenSlide;
