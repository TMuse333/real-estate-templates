import React from "react";
import vegeta from '../../media/vegeta-battle.png'
import './draggable.css'
const Draggable = ({image}) => {


    return (
        <img className="draggable-image"
        src={vegeta}/>
    )
}

export default Draggable