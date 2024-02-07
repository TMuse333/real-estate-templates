import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image }) => {
  const videoRef = useRef();



  return (
    <div className="full-slide-container">
      {video && (
        <>
          <video  className='full-slide-video' controls autoPlay muted loop>
            <source src={video} type='video/mp4' />
          </video>
          {/* <div className='overlay'>
            slat
          </div> */}
        </>
      )}
      {image && (
        <img src={image} className='full-slide-image' alt='fullscreen-slide' />
      )}
    </div>
  );
};

export default FullScreenSlide;
