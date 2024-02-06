import React, { useState } from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const xPercentage = (e.nativeEvent.offsetX / e.target.clientWidth) * 100;
      const yPercentage = (e.nativeEvent.offsetY / e.target.clientHeight) * 100;
      const objectFitValue = `${xPercentage}% ${yPercentage}%`;

      e.target.style.objectPosition = objectFitValue;
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
          objectPosition: `50% 50%`, // Initial object position
        }}
      />
    </div>
  );
};

export default Draggable;
