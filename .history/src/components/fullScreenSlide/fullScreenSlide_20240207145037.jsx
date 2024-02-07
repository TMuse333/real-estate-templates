import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image }) => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const videoOffset = videoRef.current.offsetTop +1000; // Adjust the offset as needed

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
    transition:'all 0.3s ease-in'
  }

  return (
    <div className="full-slide-container">
      {video && (
        <>
          <video ref={videoRef} className='full-slide-video' controls autoPlay={isPlaying} muted loop>
            <source src={video} type='video/mp4' />
          </video>
          <div className='overlay'
          style={overlayStyle}>
            <div className='full-slide-text'>
                <h3>Nig</h3>
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
