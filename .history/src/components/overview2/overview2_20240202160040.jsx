import React from "react";
import { overview2Data } from "../../data/data";
import BigContent from "../bigContent/bigContent";
import './overview2.css'

const Overview2 = () => {

    return (


    <div className="overview2-container">
        <div className="overview2-wrapper">


        <header className="overview2-header">
            <h3>
                Company name
            </h3>
            <h1 className="title-text">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit praesentium expedita. Reiciendis, possimus ab. Nostrum cum ducimus ratione animi autem officiis maiores, dolor sint placeat praesentium minima in molestias!</p>
            <p className="description-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium cupiditate repellendus rerum voluptate.</p>
            <button>
                Book intro call
            </button>
        </header>
        </div>
        <h2 className="overview-intro">We are the realest to do it
                so work with us
            </h2>
        <section className="overview-points-container">
           
            {overview2Data.map((aspect,index) => (
                <div className="overview-aspect">
                    <h2>
                        {aspect.name}
                    </h2>
                    <ul className="aspect-list">
                        {aspect.points.map((point,index) => (
                            <li>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>

        <BigContent
        id='big1/>
        <BigContent
        reverse={true}/>


    </div>

)
}

export default Overview2