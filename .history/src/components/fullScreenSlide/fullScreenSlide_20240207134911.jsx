import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image }) => {
  const videoRef = useRef();
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);


  return (
    <div className={`full-slide-container ${isVideoPlaying ? 'playing' : ''}`}>
      {video && (
        <>
          <video  className='full-slide-video' controls autoplay muted loop>
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
