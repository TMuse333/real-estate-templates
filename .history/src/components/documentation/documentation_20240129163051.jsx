import React from "react";




const Docs = () => {

    const docs = [
        {
            name:'Residential input form',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis non rem quibusdam perferendis quidem mollitia deserunt repudiandae adipisci neque!'
        },
        {
            name:'Seller Designated Brokerage Agreement',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis non rem quibusdam perferendis quidem mollitia deserunt repudiandae adipisci neque!'
        },
        {
            name:'Equipment Schedule',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis non rem quibusdam perferendis quidem mollitia deserunt repudiandae adipisci neque!'
        },
        {
            name:'Property Disclosure Statement',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis non rem quibusdam perferendis quidem mollitia deserunt repudiandae adipisci neque!'
        },
        {
            name:'Property ',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis non rem quibusdam perferendis quidem mollitia deserunt repudiandae adipisci neque!'
        },


    ]

    return (
        <div className="docs-container">
            <h1 className="docs-title">
                Documentation
            </h1>
            <div className="doc-text-box">
                <div className="text">
                    Here are some important documentatioin
                    that you need to sell a house
                </div>
                <div className="docs-list">


                </div>
            </div>
        </div>

    )
}

export default Docs