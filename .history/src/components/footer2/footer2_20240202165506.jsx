import React from "react";

const Footer2 = () => {

    const directory = [
      {
        destination:'about',
        name:'About'
      },
      {
        destination:'careers',
        name:'Careers'
      },
      {
        destination:'Quantum Realm',
        name: "Quantum Realm"
      }
    ]

    return (
        <footer className="footer2-container">
            <ul className="footer2-directory">
                {directory.map((obj,index) => (
                    <li
                ))}
            </ul>
        </footer>
    )
}