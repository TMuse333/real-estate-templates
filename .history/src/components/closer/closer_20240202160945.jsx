import React from "react";



const Closer = ({text}) => {

    return (
        <section className="closer-container">
            <h2 className="title-text">
                {text}
            </h2>
            <button>
                {buttonText}
            </button>
        </section>
    )
}