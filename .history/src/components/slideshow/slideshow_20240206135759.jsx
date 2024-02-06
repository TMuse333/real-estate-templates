// CustomCarousel.js
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Draggable from 'react-draggable';

const Slideshow = ({ images }) => {
  const [objectFit, setObjectFit] = useState('cover');

  const handleDrag = (e, data) => {
    // Calculate the percentage of drag within the image
    const xPercentage = (data.x / e.target.clientWidth) * 100;
    const yPercentage = (data.y / e.target.clientHeight) * 100;

    // Update the object fit value based on drag
    setObjectFit(`${xPercentage}% ${yPercentage}%`);
  };

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Draggable onDrag={handleDrag}>
            <img
              src={image}
              alt={`Image ${index}`}
              style={{ objectFit, width: '100%', height: '100%' }}
            />
          </Draggable>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slideshow;
