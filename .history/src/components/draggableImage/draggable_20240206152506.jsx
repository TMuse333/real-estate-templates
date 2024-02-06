import React, { useState } from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {
  const initialObjectPosition = 50; // Adjust this value as needed
  const [isDragging, setIsDragging] = useState(false);
  const [initialMouseY, setInitialMouseY] = useState(0);
  const sensitivityFactor = 0.1; // Adjust this factor to control sensitivity

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setInitialMouseY(e.clientY);
    console.log('drag is happening')
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaY = e.clientY - initialMouseY;
      const magnitude = Math.abs(deltaY) * (deltaY < 0 ? 1 : -1); // Negative for dragging down, positive for dragging up

      const adjustedMagnitude = magnitude * sensitivityFactor;
      const objectFitValue = `${initialObjectPosition + adjustedMagnitude}% ${initialObjectPosition + adjustedMagnitude}%`; // Adjusted based on the magnitude

      e.target.style.objectPosition = objectFitValue;

      console.log('Magnitude:', adjustedMagnitude);
    }
  };

  return (
    <div
      className="draggable-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <img
        className="draggable-image"
        src={vegeta}
        alt="Vegeta Image"
        style={{
          objectPosition: `${initialObjectPosition}% ${initialObjectPosition}%`, // Initial object position
        }}
      />
    </div>
  );
};

export default Draggable;
