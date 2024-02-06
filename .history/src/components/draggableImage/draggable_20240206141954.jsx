import React from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {
  const handleMouseMove = (e) => {
    // Calculate the percentage of hover position within the image
    const xPercentage = (e.nativeEvent.offsetX / e.target.clientWidth) * 100;
    const yPercentage = (e.nativeEvent.offsetY / e.target.clientHeight) * 100;

    // Update object-fit based on hover position
    const objectFitValue = `${xPercentage}% ${yPercentage}%`;

    // Apply the updated object-fit style directly to the img element
    e.target.style.objectPosition = objectFitValue;
  };

  return (
    <img
      className="draggable-image"
      src={vegeta}
      onMouseMove={handleMouseMove}
      alt="Vegeta Image"
    />
  );
};

export default Draggable;
