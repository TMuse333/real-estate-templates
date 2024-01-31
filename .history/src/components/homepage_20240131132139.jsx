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
import Infographic from "./infographic/infographic";
import HydroList from "./hydrolist/hydrolist";
import ServiceOverview from "./overview/overview";
import Testimonials from "./testimonials/testimonials";
const Homepage = () => {

    

    return (
        <>
    <Navbar/>

        <div className="homepage"
    
        >
                 

        <Herobanner1/>
        <Content
        image={home}
        // hasTilt={true}
        id='content1'
        customText={<TextFormat/>}
        // hasAnimation={true}
        // rev={true}
        />

    

        {/* <Docs/> */}

        {/* <Boxes/> */}
        {/* <Documentation/> */}

        <Content
        image={home2}
       title='Documentation'
        // subTitle='Documentation'
        // description={docText}
        hasTilt={true}
        id='content2'
        rev={true}
        imageId='image2'
        link='docs'
        linkText='learn more'
        customText={<HydroList/>}

        />

        <ServiceOverview/>

        <Testimonials/>

 


        </div>
        </>
    )

}

export default Homepage