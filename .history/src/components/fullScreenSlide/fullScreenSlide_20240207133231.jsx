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

  useEffect(() => {
    if (isVideoPlaying) {
      const videoPosition = videoRef.current.getBoundingClientRect();
      const overlayDiv = document.createElement('div');

      overlayDiv.style.position = 'absolute';
      overlayDiv.style.top = `${videoPosition.top}px`;
      overlayDiv.style.left = `${videoPosition.left}px`;
      overlayDiv.style.width = `${videoPosition.width}px`;
      overlayDiv.style.height = `${videoPosition.height}px`;
      overlayDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Example background color

      document.body.appendChild(overlayDiv);

      // Optionally, you can remove the overlay div when the video stops playing
      return () => document.body.removeChild(overlayDiv);
    }
  }, [isVideoPlaying]);

  return (
    <div className={`full-slide-container ${isVideoPlaying ? 'playing' : ''}`}>
      {video ? (
        <video ref={videoRef} className='full-slide-video' controls auto muted loop>
          <source src={video} type='video/mp4' />
        </video>
        <div className='overlay'
      ) : (
        <img src={image} className='full-slide-image' alt='fullscreen-slide' />
      )}
    </div>
  );
};

export default FullScreenSlide;
