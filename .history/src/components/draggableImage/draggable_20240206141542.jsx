import React, { useState } from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      // Calculate the percentage of drag within the image
      const xPercentage = (e.clientX / window.innerWidth) * 100;
      const yPercentage = (e.clientY / window.innerHeight) * 100;

      // Update object-fit based on drag
      const objectFitValue = `${xPercentage}% ${yPercentage}%`;

      // Apply the updated object-fit style directly to the img element
      e.target.style.objectFit = objectFitValue;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <img
      className="draggable-image"
      src={vegeta}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      alt="Vegeta Image"
    />
  );
};

export default Draggable;
