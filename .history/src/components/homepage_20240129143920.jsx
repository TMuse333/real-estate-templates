import React from "react";
import Herobanner1 from "./herobanner1//herobanner1";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
import image from '../media/image-holder.jpg'
import Content from "./content";
import Boxes from "./boxes";
import home from '../media/rooftight-2.png'
import Documentation from "./documentation/documentation";
import TextFormat from "./textFormat";
const Homepage = () => {

    

    return (
        <>
    <Navbar/>

        <div className="homepage"
    
        >
                 

        <Herobanner1/>
        <Content
        image={home}
        hasTilt={false}
        id='content1'
        customText={<Te}
        />

        <Boxes/>
        <Documentation/>


        </div>
        </>
    )

}

export default Homepage