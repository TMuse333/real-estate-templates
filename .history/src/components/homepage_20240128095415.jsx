import React from "react";
import Herobanner1 from "./herobanner1";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
import image from '../media/image-holder.jpg'
import Content from "./content";
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
        id='content'
        />


        </div>
        </>
    )

}

export default Homepage