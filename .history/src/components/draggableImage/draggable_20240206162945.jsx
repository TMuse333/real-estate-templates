import React, { useState, useEffect } from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {
  const initialObjectPosition = 0; // Adjust this value as needed
  const [isDragging, setIsDragging] = useState(false);
  const [initialMouseY, setInitialMouseY] = useState(0);
  const [objectPosition, setObjectPosition] = useState({
    x: initialObjectPosition,
    y: initialObjectPosition,
  });
  const [totalScroll, setTotalScroll] = useState(0);
  const sensitivityFactor = 0.01; // Adjust this factor to control sensitivity

  useEffect(() => {
    const handleMouseMove = (e) => {
        if (isDragging &&ob) {
          const deltaY = e.clientY - initialMouseY;
          const magnitude = Math.abs(deltaY) * (deltaY < 0 ? 1 : -1); // Negative for dragging down, positive for dragging up
      
          // Adjust the magnitude to prevent large spikes
          const limitedMagnitude = Math.min(Math.max(magnitude * sensitivityFactor, -10), 10);
      
          setTotalScroll((prevTotalScroll) => {
            // Ensure totalScroll stays between 0 and 100
            const newTotalScroll = Math.min(Math.max(prevTotalScroll + limitedMagnitude, 0), 100);
            return newTotalScroll;
          });
      
          setObjectPosition((prevObjectPosition) => {
            const newX = prevObjectPosition.x + limitedMagnitude;
            const newY = prevObjectPosition.y + limitedMagnitude;
      
            // Ensure newX and newY stay between 0 and 100
            const cappedX = Math.min(Math.max(newX, 0), 100);
            const cappedY = Math.min(Math.max(newY, 0), 100);
      
            // Check if the new position is equal to one of the limits
            if (cappedX === 0 || cappedX === 100 || cappedY === 0 || cappedY === 100) {
              return prevObjectPosition; // If at limit, don't update
            }
      
            return { x: cappedX, y: cappedY };
          });
      
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
    };

    const handleScroll = () => {
      // Uncomment the line below if you want to update totalScroll on scroll
      // setTotalScroll((prevTotalScroll) => prevTotalScroll + window.scrollY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDragging, initialMouseY, initialObjectPosition, sensitivityFactor]);

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