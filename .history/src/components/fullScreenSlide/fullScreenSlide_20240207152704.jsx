import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const [springProps, setSpringProps] = useSpring(() => ({
    opacity: 1,
    transform: 'translateY(0px)',
  }));

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = videoRef.current;
      const elementTop = contentElement.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;

      const offset = 350;

      if (elementTop < windowHeight - offset) {
        setIsPlaying(true);
        console.log('Video started!');
        setSpringProps({ opacity: 0, transform: 'translateY(-50px)' });
      } else {
        setIsPlaying(false);
        setSpringProps({ opacity: 1, transform: 'translateY(0px)' });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id, setSpringProps]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div className="full-slide-container">
      {video && (
        <>
          <animated.video
            ref={videoRef}
            id={id}
            className='full-slide-video'
            controls
            autoPlay={isPlaying}
            muted
            loop
            style={{ ...springProps }}
          >
            <source src={video} type='video/mp4' />
          </animated.video>
          <animated.div className='overlay' style={{ ...springProps }}>
            {/* <div ref={textRef} className='full-slide-text'>
              <h3>Jonathan Nigward</h3>
              <h1>The Best Stretch 4 ever.</h1>
            </div> */}
          </animated.div>
        </>
      )}
      {image && (
        <img src={image} className='full-slide-image' alt='fullscreen-slide' />
      )}
    </div>
  );
};

export default FullScreenSlide;
