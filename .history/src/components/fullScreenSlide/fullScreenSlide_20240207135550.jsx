import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image }) => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const videoOffset = videoRef.current.offsetTop -500; // Adjust the offset as needed

      if (scrollPosition > videoOffset && !isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
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

  return (
    <div className="full-slide-container">
      {video && (
        <>
          <video ref={videoRef} className='full-slide-video' controls autoPlay={isPlaying} muted loop>
            <source src={video} type='video/mp4' />
          </video>
          <div className='overlay'>
            slat
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
