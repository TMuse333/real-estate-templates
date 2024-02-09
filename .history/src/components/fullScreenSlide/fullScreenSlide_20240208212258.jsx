import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const [topReached, setTopReached] = useState(false);
  const [textPosition, setTextPosition] = useState(50);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [bottomReached, setBottomReached] = useState(false)


  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const contentElement = videoRef.current;
      const elementRect = contentElement.getBoundingClientRect();

      const textElement = textRef.current;
      const textRect = textElement.getBoundingClientRect();

      const windowHeight = window.innerHeight;
      const elementTop = elementRect.top;
      const elementBottom = elementRect.bottom;

      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - prevScrollY;

      const scrollDirection = deltaY > 0 ? 'down' : 'up';
      const scrollMagnitude = Math.abs(deltaY) / 8;

      if (elementTop -50 <= 0) {
        console.log('Top of the element touched the top of the viewport!');
        setTopReached(true);
      }



      if (elementBottom <= windowHeight) {
        console.log('Bottom of the element touched the bottom of the viewport!');
        setBottomReached(true);

      } else {
        setBottomReached(false);
      }

 

      if (topReached || bottomReached) {
        setTextPosition((prevTextPosition) => {
          // If scrolling up (negative deltaY), subtract scrollMagnitude
          // If scrolling down (positive deltaY), add scrollMagnitude
          return prevTextPosition + (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude);
        });

        // Do something with the direction and magnitude, for example, log them
       

        const containerTop = elementRect.top;
        const textTop = textRect.top - containerTop;
        const containerHeight = elementRect.height;
        const textPercentage = (textTop / containerHeight) * 100;

        console.log('Text Percentage:', textPercentage);
      }

      setScrollPosition(scrollMagnitude);
      console.log('Scroll Position:', scrollPosition);

      prevScrollY = currentScrollY;
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [id, topReached, setScrollPosition, setBottomReached]);


  useEffect(()=> {
    if(bottomReached){
      document.body.style.overflow = 'hidden'
    }
  },[bottomReached])


  const textStyle = {
    transition: 'all 0.02s ease-in',
  };

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
            className="full-slide-video"
            controls
            autoPlay={isPlaying}
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="overlay" style={overlayStyle}>
            <div ref={textRef}
              style={{
                bottom: `${textPosition}%`,
              }}
              className="full-slide-text"
            >
              <h3>Jonathan Nigward</h3>
              <h1>The Best Stretch 4 ever.</h1>
            </div>
          </div>
        </>
      )}
      {image && <img src={image} className="full-slide-image" alt="fullscreen-slide" />}
    </div>
  );
};

export default FullScreenSlide;