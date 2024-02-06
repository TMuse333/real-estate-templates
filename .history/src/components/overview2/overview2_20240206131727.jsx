import React from "react";
import { overview2Data } from "../../data/data";
import BigContent from "../bigContent/bigContent";
import Closer from "../closer/closer";
import Content from "../content/content";
import Footer2 from "../footer2/footer2";
import Herobanner2 from "../herobanner2/herobanner2";
import Navbar3 from "../navbar3/navbar3";
import './overview2.css'
import { slideShowPictures } from "../../data/data";
import Slideshow from "../slideshow/slideshow";

const TextFormat = () => {
    return (
<>
<div className="text-format-container">


        <h3>
        Company name
    </h3>
    <h1 className="title-text">Lorem ipsum dolor sit amet consectetur.</h1>
    <p className="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit praesentium expedita. Reiciendis, possimus ab. Nostrum cum ducimus ratione animi autem officiis maiores, dolor sint placeat praesentium minima in molestias!</p>
    <p className="description-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium cupiditate repellendus rerum voluptate.
    <br/>    <button className="overview-button">
        Book intro call
    </button></p>

    </div>
    </>
    )
}

const Overview2 = () => {

    return (
<>

<Navbar3/>

    <div className="overview2-container">

        <Herobanner2/>
        <div className="overview2-wrapper">


        <header >

<Content
customText={<TextFormat/>}
rev={true}
/>

        </header>
        </div>
        <h2 className="overview-intro">We are the realest to do it
                so work with us
            </h2>
        <section className="overview-points-container">
           
            {overview2Data.map((aspect,index) => (
                <div className="overview-aspect"
                key={index}>
                    <h2>
                        {aspect.name}
                    </h2>
                    <ul className="aspect-list">
                        {aspect.points.map((point,index) => (
                            <li key={index}>
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

<Slideshow
 images={slideShowPictures}
 />

        <Closer
        text='Start generating revenue for your tech company with the Directive Team.

        '
        buttonText='Book Now'
        />

        <Footer2/>


    </div>
    </>

)
}

export default Overview2