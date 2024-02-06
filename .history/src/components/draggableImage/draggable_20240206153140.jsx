import React, { useState, useEffect } from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {
  const initialObjectPosition = 50; // Adjust this value as needed
  const [isDragging, setIsDragging] = useState(false);
  const [initialMouseY, setInitialMouseY] = useState(0);
  const [objectPosition, setObjectPosition] = useState({
    x: initialObjectPosition,
    y: initialObjectPosition,
  });
  const sensitivityFactor = 0.1; // Adjust this factor to control sensitivity

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const deltaY = e.clientY - initialMouseY;
        const magnitude = Math.abs(deltaY) * (deltaY < 0 ? 1 : -1); // Negative for dragging down, positive for dragging up

        const adjustedMagnitude = magnitude * sensitivityFactor;
        const newX = initialObjectPosition + adjustedMagnitude;
        const newY = initialObjectPosition + adjustedMagnitude;

        setObjectPosition({ x: newX, y: newY });

        console.log(o)

        const objectFitValue = `${newX}% ${newY}%`;
        document.querySelector('.draggable-image').style.objectPosition = objectFitValue;

        console.log('Magnitude:', adjustedMagnitude);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, initialMouseY, initialObjectPosition, sensitivityFactor]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setInitialMouseY(e.clientY);
    console.log('drag is happening');
  };

  return (
    <div
      className="draggable-container"
      onMouseDown={handleMouseDown}
    >
      <img
        className="draggable-image"
        src={vegeta}
        alt="Vegeta Image"
        style={{
          objectPosition: `${objectPosition.x}% ${objectPosition.y}%`, // Initial object position
        }}
      />
    </div>
  );
};

export default Draggable;
