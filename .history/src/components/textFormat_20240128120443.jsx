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
                marginTop:'-1rem'
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
                    marginTop:'0rem'
                }}>
                    Let's answer these questions in this
                    step by step approach to Selling My Home
                </p>
                </div>

        </div>
    )
}

export default TextFormat

    useEffect(() => {
        const handleScroll = () => {
            const contentElement = contentRef.current;
            const elementTop = contentElement.getBoundingClientRect().top;
            const elementHeight = contentElement.clientHeight;
            const windowHeight = window.innerHeight;
    
            // Calculate the percentage of the element's bottom in view
            const visiblePercentBottom = Math.max(0, Math.min(100, (windowHeight - (elementTop + elementHeight)) / windowHeight * 100));
    
            // Check if only the bottom 33% of the element is in view
            const bottomThirdInView = visiblePercentBottom >= 67;
    
            // Calculate the percentage of the element in view
            const visiblePercent = Math.max(0, Math.min(100, (windowHeight - elementTop) / windowHeight * 100));
    
            // Gradually decrease the tilt angle from 30 to 0 as 60% of the element becomes visible
 
            const newTiltAngle= 
            // bottomThirdInView ? (visiblePercent / 90) * 10 :
            Math.max(0, 30 - (visiblePercent / 60) * 30);
    
            console.log("Visible Percentage:", visiblePercent);
            console.log("Tilt Angle:", newTiltAngle);
            setTiltAngle(newTiltAngle);
            console.log(bottomThirdInView)
    
            const offset = 350;
    
            if (elementTop < windowHeight - offset) {
                setIsAnimated(true);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [id]);