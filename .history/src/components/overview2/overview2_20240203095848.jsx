import React from "react";
import { overview2Data } from "../../data/data";
import BigContent from "../bigContent/bigContent";
import Closer from "../closer/closer";
import Footer2 from "../footer2/footer2";
import './overview2.css'

const textFormat = () => {
    return (
        
    )
}

const Overview2 = () => {

    return (


    <div className="overview2-container">
        <div className="overview2-wrapper">


        <header className="overview2-header">

    
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
        id='big1'/>
        <BigContent
        reverse={true}
        id='big2'/>

        <Closer
        text='Start generating revenue for your tech company with the Directive Team.

        '
        buttonText='Book Now'
        />

        <Footer2/>


    </div>

)
}

export default Overview2