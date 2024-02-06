import React, { useState } from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [scrollPosition, setScrollPosition] = useState({ left: 0, top: 0 });

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

  const handleWheel = (e) => {
    // Adjust the scroll position based on the wheel movement magnitude
    const scrollMagnitude = 10; // Adjust this value as needed
    setScrollPosition((prev) => ({
      left: prev.left + e.deltaX * scrollMagnitude,
      top: prev.top + e.deltaY * scrollMagnitude,
    }));
  };

  return (
    <div
      className="draggable-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
    >
      <img
        className="draggable-image"
        src={vegeta}
        alt="Vegeta Image"
        style={{
          objectPosition: `50% 50%`, // Initial object position
          transform: `translate(${scrollPosition.left}px, ${scrollPosition.top}px)`,
        }}
      />
    </div>
  );
};

export default Draggable;
