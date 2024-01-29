import React from "react";
import Herobanner1 from "./herobanner1//herobanner1";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
import image from '../media/image-holder.jpg'
import Content from "./content";
import Boxes from "./boxes";
import home from 'src/media/rooftight-2.jpeg'
const Homepage = () => {

    

    return (
        <>
    <Navbar/>

        <div className="homepage"
    
        >
                 

        <Herobanner1/>
        <Content
        image={image}
        hasTilt={false}
        id='content1'
        />

        <Boxes/>


        </div>
        </>
    )

}

export default Homepage