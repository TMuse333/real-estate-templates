import React from "react";
import './closer.css'


const Closer = ({text,buttonText}) => {

    return (
        <section className="closer-container">
            <div className="closer-contents">
                
            </div>
            <h2 className="title-text">
                {text}
            </h2>
            <button>
                {buttonText}
            </button>
        </section>
    )
}

export default Closer