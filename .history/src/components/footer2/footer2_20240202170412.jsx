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

    ]

    return (
        <footer className="footer2-container">

            <

            <ul className="footer2-directory">
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

                <ul className="service-list">

  

                    {services.map((service,index) => (
                        <Link to={service.destination}
                        >
                            <li key={index}>
                                {service.name}
                            </li>
                        </Link>
                    ))}

            </ul>


        </footer>
    )
}

export default Footer2