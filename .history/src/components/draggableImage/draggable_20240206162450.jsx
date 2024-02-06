import React, { useState, useEffect, useRef } from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {
  const initialObjectPosition = 0;
  const [isDragging, setIsDragging] = useState(false);
  const [initialMouseY, setInitialMouseY] = useState(0);
  const [objectPosition, setObjectPosition] = useState({
    x: initialObjectPosition,
    y: initialObjectPosition,
  });
  const [totalScroll, setTotalScroll] = useState(0);
  const sensitivityFactor = 0.01;
  const prevPositionRef = useRef({ x: initialObjectPosition, y: initialObjectPosition });

  useEffect(() => {
    let intervalId;

    const handleMouseMove = (e) => {
      if (isDragging) {
        const deltaY = e.clientY - initialMouseY;
        const magnitude = Math.abs(deltaY) * (deltaY < 0 ? 1 : -1);
        const limitedMagnitude = Math.min(Math.max(magnitude * sensitivityFactor, -10), 10);

        setTotalScroll((prevTotalScroll) => {
          const newTotalScroll = Math.min(Math.max(prevTotalScroll + limitedMagnitude, 0), 100);
          return newTotalScroll;
        });

        setObjectPosition((prevObjectPosition) => {
          const newX = prevObjectPosition.x + limitedMagnitude;
          const newY = prevObjectPosition.y + limitedMagnitude;

          const cappedX = Math.min(Math.max(newX, 0), 100);
          const cappedY = Math.min(Math.max(newY, 0), 100);

          if (cappedX === 0 || cappedX === 100 || cappedY === 0 || cappedY === 100) {
            return prevObjectPosition;
          }

          return { x: cappedX, y: cappedY };
        });

        prevPositionRef.current = { ...objectPosition };

        const objectFitValue = `${objectPosition.x}% ${objectPosition.y}%`;
        document.querySelector('.draggable-image').style.objectPosition = objectFitValue;

        console.log('Magnitude after:', limitedMagnitude);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseDown = (e) => {
      e.preventDefault();
      setIsDragging(true);
      setInitialMouseY(e.clientY);
      console.log('drag is happening');

      // Set interval for smoother animation
      intervalId = setInterval(() => {
        handleMouseMove({ clientY: e.clientY });
      }, 16); // 60 frames per second
    };

    const handleScroll = () => {
      // Uncomment the line below if you want to update totalScroll on scroll
      // setTotalScroll((prevTotalScroll) => prevTotalScroll + window.scrollY);
    };

    document.addEventListener('mouseup', () => {
      clearInterval(intervalId);
      handleMouseUp();
    });
    document.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseup', () => {
        clearInterval(intervalId);
        handleMouseUp();
      });
      document.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDragging, initialMouseY, initialObjectPosition, sensitivityFactor, objectPosition]);

  return (
    <div className="draggable-container">
      <img
        className="draggable-image"
        src={vegeta}
        alt="Vegeta Image"
        style={{
          objectPosition: `${objectPosition.x}% ${objectPosition.y}%`, // Initial object position
        }}
      />
      <p>Total Scroll: {totalScroll}</p>
    </div>
  );
};

export default Draggable;
