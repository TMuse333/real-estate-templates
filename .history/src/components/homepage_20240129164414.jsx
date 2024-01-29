import React from "react";
import Herobanner1 from "./herobanner1//herobanner1";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
import image from '../media/image-holder.jpg'
import Content from "./content";
import Boxes from "./boxes";
import home from '../media/rooftight-2.png'

import TextFormat from "./textFormat";
import home2 from '../media/rooftight-2.png'
import { docText } from "../data/data";
import Docs from "./documentation/documentation";
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
        customText={<TextFormat/>}
        // rev={true}
        />

        <Docs/>

        {/* <Boxes/> */}
        {/* <Documentation/> */}

        {/* <Content
        image={home2}
       title='New Construction'
        subTitle='Documentation'
        description={docText}
        hasTilt={true}
        id='content2'
        rev={true}
        imageId='image2'
        link='rooftight'
        linkText='learn more'

        /> */}


        </div>
        </>
    )

}

export default Homepage