import React from "react";
import Herobanner1 from "./herobanner1//herobanner1";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
import image from '../media/image-holder.jpg'
import Content from "./content/content";
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
import BigContent from "./bigContent/bigContent";
import Herobanner2 from "./herobanner2/herobanner2";
import Footer2 from "./footer2/footer2";
import { slideShowPictures } from "../data/data";
import Slideshow from "./slideshow/slideshow";
import stepback from '../media/stepback.mp4'
import FullScreenSlide from "./fullScreenSlide/fullScreenSlide";

const TextFormat2 = () => {
    return (
<>
        <h3>
        Company name
    </h3>
    <h1 className="title-text">Lorem ipsum dolor sit amet consectetur.</h1>
    <p className="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit praesentium expedita. Reiciendis, possimus ab. Nostrum cum ducimus ratione animi autem officiis maiores, dolor sint placeat praesentium minima in molestias!</p>
    <p className="description-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium cupiditate repellendus rerum voluptate.</p>
    <button>
        Book intro call
    </button>
    </>
    )
}
const Homepage = () => {

    

    return (
        <>
    <Navbar/>

        <div className="homepage"
    
        >
                 

        <Herobanner1

        />
        {/* <Herobanner2/> */}

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

        <Content
        image={home2}
        customText={<TextFormat2/>}
        />

        <ServiceOverview/>

        <FullScreenSlide
        video={stepBack}
        />

      

 <BigContent
//  reverse={true}
id='bigContent1'
 />

{/* <BigContent
 reverse={true}
 id='bigContent2'
 /> */}

 <Testimonials/>

 {/* <Slideshow
 images={slideShowPictures}
 /> */}

 <Footer2/>


        </div>
        </>
    )

}

export default Homepage