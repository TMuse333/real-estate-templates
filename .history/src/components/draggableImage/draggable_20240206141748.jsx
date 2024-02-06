import React from 'react';
import './draggable.css';
import vegeta from '../../media/vegeta-battle.png';

const Draggable = () => {


  return (
    <img
      className="draggable-image"
      src={vegeta}
     
      alt="Vegeta Image"
    />
  );
};

export default Draggable;
