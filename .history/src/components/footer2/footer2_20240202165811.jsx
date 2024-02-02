import React from "react";
import { Link } from "react-router-dom";

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

    const services = [
        {
            destination:'Web-dev',
            name:'Web Dev'
          },
          {
            destination:'copywriting',
            name:'Copywriting'
          },
          {
            destination:'Design',
            name: "Design"
          }
    ]

    return (
        <footer className="footer2-container">
            <ul className="footer2-directory">
                {directory.map((obj,index) => (
                    <Link to={obj.destination}>
                        <li>
                            {obj.name}
                        </li>
                    </Link>
                ))}

                <h3>Services</h3>
            </ul>
        </footer>
    )
}