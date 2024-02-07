import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      const videoBottom = videoRef.current.offsetTop + videoRef.current.offsetHeight;
      const textOffset = videoBottom - window.innerHeight;

      if (scrollPosition > textOffset) {
        const translateY = scrollPosition - textOffset;
        textRef.current.style.transform = `translateY(-${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const videoOffset = videoRef.current.offsetTop + 1000; // Adjust the offset as needed

      if (scrollPosition > videoOffset && !isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
        console.log('Video started!');
      } else if (scrollPosition <= videoOffset && isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying]);

  const overlayStyle = {
    backgroundColor: !isPlaying ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.0)',
    transition: 'all 0.3s ease-in',
  };

  return (
    <div className="full-slide-container">
      {video && (
        <>
          <video ref={videoRef} className='full-slide-video' controls autoPlay={isPlaying} muted loop>
            <source src={video} type='video/mp4' />
          </video>
          <div className='overlay' style={overlayStyle}>
            <div ref={textRef} className='full-slide-text'>
              <h3>Jonathan Nigward</h3>
              <h1>The Best Stretch 4 ever.</h1>
            </div>
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
