import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [bottomReached, setBottomReached] = useState(false);
const [topReached,setTopReached] =  useState(false)
const [textPosition, s] = useState(50)
 

useEffect(() => {

  let prevScrollY = window.scrollY

  const handleScroll = (event) => {



      const contentElement = videoRef.current;
      const elementRect = contentElement.getBoundingClientRect();

      const windowHeight = window.innerHeight;
      const elementTop = elementRect.top;

      const currentScrollY = window.scrollY;
        const deltaY = currentScrollY - prevScrollY;

        const scrollDirection = deltaY > 0 ? 'down' : 'up';

        const scrollMagnitude = Math.abs(deltaY);

        let textMove = deltaY * 0.5



        // Do something with the direction and magnitude, for example, log them
        console.log('Scroll Direction:', scrollDirection);
        console.log('Scroll Magnitude:', scrollMagnitude);

        set

        console.log('the text would move '+textMove)

        prevScrollY = currentScrollY;

      if (elementTop <= 0) {
          console.log('Top of the element touched the top of the viewport!');
          setTopReached(true);
      }

      // if (topReached) {
      //     document.body.style.overflow = 'hidden';
      // } 
  };

  window.addEventListener('wheel', handleScroll);

  return () => {
      window.removeEventListener('wheel', handleScroll);
  };
}, [id, topReached]);


  
const textStyle = {
  bottom:`${bottomPosition}%`
}
 

  const overlayStyle = {
    backgroundColor: !isPlaying ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease-in', // Adjust the duration here
  };

  return (
    <div className="full-slide-container">
      {video && (
        <>
          <video
            ref={videoRef}
            id={id}
            className='full-slide-video'
            controls
            autoPlay={isPlaying}
            muted
            loop
          >
            <source src={video} type='video/mp4' />
          </video>
          <div className='overlay' style={overlayStyle}>
            <div style={textStyle}
            ref={textRef} className='full-slide-text'>
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
