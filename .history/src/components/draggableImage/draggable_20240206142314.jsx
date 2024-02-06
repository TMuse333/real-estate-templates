import React, { useState } from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    // Prevent the default drag-and-drop behavior
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      // Calculate the percentage of hover position within the image
      const xPercentage = (e.nativeEvent.offsetX / e.target.clientWidth) * 100;
      const yPercentage = (e.nativeEvent.offsetY / e.target.clientHeight) * 100;

      // Update object-fit based on hover position
      const objectFitValue = `${xPercentage}% ${yPercentage}%`;

      // Apply the updated object-fit style directly to the img element
      e.target.style.objectPosition = objectFitValue;
    }
  };

  return (
    <img
      className="draggable-image"
      src={vegeta}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      alt="Vegeta Image"
    />
  );
};

export default Draggable;
