import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image }) => {
  const videoRef = useRef();
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`full-slide-container ${isOverlayVisible ? 'playing' : ''}`}>
      {video && (
        <>
          <video ref={videoRef} className='full-slide-video' controls auto muted loop>
            <source src={video} type='video/mp4' />
          </video>
          {isOverlayVisible && (
            <div className='overlay'>
              slat
            </div>
          )}
        </>
      )}
      {image && (
        <img src={image} className='full-slide-image' alt='fullscreen-slide' />
      )}
    </div>
  );
};

export default FullScreenSlide;
