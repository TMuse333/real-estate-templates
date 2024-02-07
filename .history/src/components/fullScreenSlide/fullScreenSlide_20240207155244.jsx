import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = videoRef.current;
      const elementTop = contentElement.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;
      const offset = 350;

      if (elementTop < windowHeight - offset) {
        setIsPlaying(true);
        console.log('Video started!');
      } else {
        setIsPlaying(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]);

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

  // Define the animation properties for the text
  const textAnimation = useSpring({
    bottom: isPlaying ? '75%' : '-5%',
    from: { bottom: '-5%' },
  });

  textRef.current.style.bottom = `${bottomValue}%`;

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
            <animated.div ref={textRef} className='full-slide-text' style={textAnimation}>
              <h3>Jonathan Nigward</h3>
              <h1>The Best Stretch 4 ever.</h1>
            </animated.div>
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
