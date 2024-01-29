import React from "react";
import image from '../media/image-holder.jpg'
import '../styles/boxes.css'

const Boxes = () => {

    const data = [
        {
            image:image,
            title:`How Much Is My Home Worth`,
            description:`To determine your home’s listing price, I perform a Comparative Market Analysis (CMA).
            `
        },
        {
            image:image,
            title:`How Long Will It Take To Sell My Home`,
            description:`As part of your CMA, I will provide you with data showing how long comparable homes were on the market before they sold.
            `
        },
        {
            image:image,
            title:`How Do I Maximize My Sales Price`,
            description:`Pre-listing preparation determines the success of the sale of your home. During the pre-listing phase, I will advise you
            `
        },
    ]

    return (
        <div className="boxes-container">

            {data.map((data,index) => (
                <div className="box">
                    <img src={data.image}
                    style={{
                        height:'42px'
                    }}/>

                    <h3 className="title-text">
                        {data.title}
                    </h3>

                    <p className="description-text">
                        {data.description}
                    </p>


                    </div>
            ))}

        </div>
    )
}

export default Boxes