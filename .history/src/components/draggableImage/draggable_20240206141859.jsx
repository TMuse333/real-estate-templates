import React from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {


  return (
    <img
      className="draggable-image"
      src={vegeta}
        style={{
            objectFit:'10% 10%'
        }}
      alt="Vegeta Image"
    />
  );
};

export default Draggable;
