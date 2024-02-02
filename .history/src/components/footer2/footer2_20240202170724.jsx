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

    const contacts = [
        {
            destination:'contact',
            name:'Book a call'
          },
          {
            destination:'copywriting',
            name:'(902) 103-1738'
          },
          {
          
            name: "email@johnson.com"
          }

    ]

    return (
        <footer className="footer2-container">

            <h3>
                Directory
            </h3>

            <ul className="footer2-list">
                {directory.map((obj,index) => (
                    <Link to={obj.destination}>
                        <li
                        key={index}>
                            {obj.name}
                        </li>
                    </Link>
                ))}

                </ul>

                <h3>Services</h3>

                <ul className="footer2-list">

  

                    {services.map((service,index) => (
                        <Link to={service.destination}
                        >
                            <li key={index}>
                                {service.name}
                            </li>
                        </Link>
                    ))}

            </ul>

            <h3>
                Contact
            </h3>


        </footer>
    )
}

export default Footer2