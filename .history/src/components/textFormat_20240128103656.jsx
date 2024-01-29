import React from "react";
import '../styles/textFormat.css'

const TextFormat = () => {

    return (
        <div className="textFormat-container">
            <h2 className="title-text">
                Why Sell Now?
            </h2>
            <p className="description-text intro">
            Real estate in the greater Halifax area has been undervalued for years.  In 2019 the market started a correction.  If you bought your home before 2019, you are in the enviable position of having paid some of the lowest prices for a single-family detached home of any major city in Canada.
            </p>
            <div className="line">

            </div>

            <div style={{
                marginTop:'-rem'
            }}>

            

            <p className="description-text left">
                You probably have questions like:
            </p>

            <ul className="questions-list">
                <li>How much is it worth?</li>
                <li>How long will it take to sell?</li>
                <li>How do I maximize my sale price</li>
                </ul>

                <p className="description-text"
                style={{
                //    ,
                }}>
                    Let's answer these questions in this
                    step by step approach to Selling My Home
                </p>
                </div>

        </div>
    )
}

export default TextFormat