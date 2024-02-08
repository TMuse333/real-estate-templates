import React, { useState, useEffect } from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {
 // Adjust this value as needed
  const [isDragging, setIsDragging] = useState(false);
  const [initialMouseY, setInitialMouseY] = useState(0);
  const [objectPosition, setObjectPosition] = useState({
    x: initialObjectPosition,
    y: initialObjectPosition,
  });
  const [totalScroll, setTotalScroll] = useState(0);
  const sensitivityFactor = 0.1; // Adjust this factor to control sensitivity

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const deltaY = e.clientY - initialMouseY;
        const magnitude = Math.abs(deltaY) * (deltaY < 0 ? 1 : -1); // Negative for dragging down, positive for dragging up

        const adjustedMagnitude = magnitude * sensitivityFactor;
        const newX =   adjustedMagnitude;
        const newY = adjustedMagnitude;

        setTotalScroll(totalScroll+magnitude)

        console.log('Magnitude before:', adjustedMagnitude);
        setObjectPosition((prevObjectPosition) => ({
          x: adjustedMagnitude,
          y: adjustedMagnitude,
        }));

       

        const objectFitValue = `${newX}% ${newY}%`;
        document.querySelector('.draggable-image').style.objectPosition = objectFitValue;

        console.log('Magnitude after:', adjustedMagnitude);
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
    //   setTotalScroll(window.scrollY);
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