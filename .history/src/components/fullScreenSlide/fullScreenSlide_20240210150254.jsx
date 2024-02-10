import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';

const FullScreenSlide = ({ video, image, id }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const [topReached, setTopReached] = useState(false);
  const [textPosition, setTextPosition] = useState(40);


  const [bottomReached, setBottomReached] = useState(false)
  const [scrollPower, setScrollPower ] = useState(0)
  const [videoOpacity, setVideoOpacity] = useState(0.5)

  const [relativePosition, setRelativePosition] = useState('below'); // 'above', 'below', 'atTop', 'atBottom'

  const [textAtTop, setTextAtTop] = useState(false)

  const [isReturning, setIsReturning] = useState(false)

  const [isLocked,setIsLocked] = useState(false)

  const [videoScale, setVideoScale] = useState(1);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 700)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Check if the screen width is 700px or wider
      if (screenWidth < 700) {
        // Your action or logic when the screen width is 700px or wider
        setIsDesktop(false)
      }

      console.log(isDesktop)
     
    };

    // Attach the event listener for resize
    window.addEventListener('resize', handleResize);

    // Initial check when the component mounts
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsDesktop]); 



  useEffect(() => {
    const handleWheel = (event) => {

      if(isDesktop){

      setIsLocked(document.body.style.overflow === 'hidden');

      const contentElement = videoRef.current;
      const elementRect = contentElement.getBoundingClientRect();
  
      const textElement = textRef.current;
      const textRect = textElement.getBoundingClientRect();
  
      const windowHeight = window.innerHeight;
      const elementTop = elementRect.top;

      // const elementAtBottom = Math.abs(elementBottom - windowHeight) < 1;

  
      // Check if 40 percent of the top of the element is in view
      const threshold = elementRect.height * 0.4;
      const is40PercentInView = elementTop < threshold;
  
      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
      const scrollMagnitude = Math.abs(event.deltaY);

      const elementBottom = elementRect.bottom;

      // console.log('bottom',elementTop,elementBottom)
  
      // Check if at the top and scrolling up, set scroll power to 0
      if (textAtTop && scrollDirection === 'up') {
        setScrollPower(0);
        document.body.style.overflow = 'auto'; // Set overflow to auto when at the top and scrolling up
      } else {
        // Only apply scroll power if 40 percent is in view
        setScrollPower(is40PercentInView ? (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude) : 0);
      }
  
      setTextPosition((prevTextPosition) => {
        // Calculate the new text position without clamping
        let newTextPosition = prevTextPosition + scrollPower / 20;
  
        // Check if the new text position is within the valid range
        if (newTextPosition >= 40 && newTextPosition <= 95) {

          if (scrollDirection === 'down') {
          
            if (newTextPosition >= 70) {
              const opacityChange = 0.005 * (newTextPosition - 70); // Adjust the rate of opacity change
              setVideoOpacity((prevOpacity) => Math.max(0, prevOpacity - opacityChange));
            }
          } else {
          
            const opacityChange = 0.005 * (90 - newTextPosition); // Adjust the rate of opacity change
            setVideoOpacity((prevOpacity) => Math.min(0.5, prevOpacity + opacityChange));
          }


          // If within range, update the text position
          return newTextPosition;
        } else {
          // If outside the range, clamp the value
          return Math.min(Math.max(newTextPosition, 40), 95);
        }
      });
  
      // Check if the top of the element reaches the top of the viewport
      if (elementTop -3 <= 0) {
        setTopReached(true);
        if (textPosition < 95) {
          document.body.style.overflow = 'hidden';
        }
      }
  
      // Check if the text position hits 90 and reset overflow to auto
      if (textPosition >= 95) {
        document.body.style.overflow = 'auto';
        setTextAtTop(true)
      }

      if(elementBottom < windowHeight && scrollDirection === 'up'){
        setIsReturning(true)
        console.log('return initiated')
      }

      if(isReturning && elementBottom >= 800){
        document.body.style.overflow = 'hidden'
        setTextAtTop(false)
      }

      if(textPosition === 40 && scrollDirection === 'up'){
        document.body.style.overflow = 'auto'
        setIsReturning(false)
      }

      if( scrollPower > 1 && isReturning){
        document.body.style.overflow = 'auto'
        setIsReturning(false)
      }

    

     

      let newVideoScale;
     
        // Adjust video scale based on the distance from the bottom of the viewport
        newVideoScale = Math.min(1, Math.max(0.5, 1 - ((windowHeight - elementBottom) / 5000)));
     
      
      setVideoScale(newVideoScale);
      
      

  console.log('video scale',videoScale)
    }

    else{
      document.body.style.overflow = 'auto'
    }


 
    };
  
    document.addEventListener('wheel', handleWheel);
  
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [setScrollPower, scrollPower, setTextPosition, setBottomReached, textPosition, textAtTop, setTextAtTop,setIsReturning,isLocked,setVideoScale]);




  useEffect(() => {
    // console.log('isLocked changed:', isLocked);
    // console.log('Is returning changed',isReturning)
    console.log('TextAtTop changed',textAtTop)
    // console.log('text position',textPosition)

    
    // Additional logic, if needed, based on the value of isLocked
  }, [isLocked,isReturning,textAtTop,textPosition]);
  

  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${videoOpacity})`,
    transition: 'opacity 0.3s ease-in', // Adjust the duration here
  };

  const textStyle = {
    position: 'absolute',
    left:'50%',
    transform:'translateX(-50%)',
    bottom:`${textPosition}`
  }

  return (
    <>

    <div className="full-slide-container"
    
   >
 
        <>
          <video
 
            ref={videoRef}
            id={id}
            className="full-slide-video"
            controls
            autoPlay={isPlaying}
            muted
            loop
            style={textAtTop && isDesktop?{ transform: `scale(${videoScale})` } : null}
          >
            <source src={video} type="video/mp4" />
          </video>

          
          
          {isDesktop ? (
            <>
    <div className="overlay" style={overlayStyle}>
      <div
        ref={textRef}
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
  ) : (
    <div
        ref={textRef}
        
        className="full-slide-text"
      >
        <h3>Jonathan Nigward</h3>
        <h1>The Best Stretch 4 ever.</h1>
      </div>
  )
  }

         
        </>
      
    
  
    </div>

    <div className='full-slide-description'>
      <h2>
        straight from the guadeloupe islands
      </h2>
      <div >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit magnam molestias facilis. Obcaecati itaque quisquam incidunt, alias dignissimos fugiat. Impedit!
        <button>button</button>
      </div>
    </div>

    </>
  );
};

export default FullScreenSlide;