import React, { useRef, useEffect } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image }) => {
  const videoRef = useRef();

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px', // no margin
      threshold: 0.5, // 50% visibility required
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video is now visible, start playing
          videoRef.current.play();
        } else {
          // Video is not visible, pause or stop as needed
          videoRef.current.pause();
        }
      });
    };

    // Create an intersection observer with the callback
    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the video element
    observer.observe(videoRef.current);

    // Cleanup the observer when the component is unmounted
    return () => observer.disconnect();
  }, []); // Run this effect only once when the component mounts

  return (
    <div className='full-slide-container'>
      {video ? (
        <video ref={videoRef} className='full-slide-video' controls auto muted loop>
          <source src={video} type='video/mp4' />
        </video>
      ) : (
        <img src={image} className='full-slide-image' alt='fullscreen-slide' />
      )}
    </div>
  );
};

export default FullScreenSlide;
