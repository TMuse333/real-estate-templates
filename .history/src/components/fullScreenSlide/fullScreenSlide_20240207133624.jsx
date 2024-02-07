import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image }) => {
  const videoRef = useRef();
  const overlayRef = useRef();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
          setIsVideoPlaying(true);
        } else {
          videoRef.current.pause();
          setIsVideoPlaying(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);



  return (
    <div className={`full-slide-container ${isVideoPlaying ? 'playing' : ''}`}>
      {video ? (
        <>

        <video 
        ref={videoRef}
         className='full-slide-video' controls auto muted loop>
          <source src={video} type='video/mp4' />
        </video>
        <div className='overlay'>
            slat
        </div>
          </>
      ) : (
        <img src={image} className='full-slide-image' alt='fullscreen-slide' />
      )}
    </div>
  );
};

export default FullScreenSlide;
