import React, { useState } from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png'

const Draggable = ({ image }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    console.log('dragging!')
    setIsDragging(true);
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
    document.documentElement.style.setProperty('--object-fit', `${xPercentage}% ${yPercentage}%`);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - position.x;
      const deltaY = e.clientY - position.y;

      // Update object-fit based on drag
      const objectFitX = position.x + deltaX;
      const objectFitY = position.y + deltaY;

      setPosition({ x: e.clientX, y: e.clientY });
      updateObjectFit(objectFitX, objectFitY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateObjectFit = (x, y) => {
    // Calculate the percentage of drag within the image
    const xPercentage = (x / window.innerWidth) * 100;
    const yPercentage = (y / window.innerHeight) * 100;

    // Apply the updated object-fit style
    document.documentElement.style.setProperty('--object-fit', `${xPercentage}% ${yPercentage}%`);
  };

  return (
    <img
      className="draggable-image"
      src={vegeta}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      alt="Draggable Image"
    />
  );
};

export default Draggable;
