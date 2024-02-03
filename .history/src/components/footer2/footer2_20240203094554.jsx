import React from "react";
import { Link } from "react-router-dom";
import './footer2.css'
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
           
            name:'(902) 103-1738'
          },
          {
          
            name: "email@johnson.com"
          }

    ]

    return (
        <footer className="footer2-container">

            <h3
            className="footer2-title">
                Directory
            </h3>

            <ul className="footer2-list">
                {directory.map((obj,index) => (
                    <Link to={obj.destination}
                    className='footer2-link'>
                        <li
                        key={index}>
                            {obj.name}
                        </li>
                    </Link>
                ))}

                </ul>

                <h3
                className="footer2-title">
                    Services</h3>

                <ul className="footer2-list">

  

                    {services.map((service,index) => (
                        <Link to={service.destination}
                        className='footer2-link'
                        >
                            <li key={index}>
                                {service.name}
                            </li>
                        </Link>
                    ))}

            </ul>

            <section className="footer2-directory"

            <h3 className="footer2-title">
                Contact
            </h3>

            <ul className="footer2-list">

           

            {contacts.map((info, index) => (
  <li key={index}>
    {info.destination ? (
      <Link className="footer2-link"
       to={info.destination}>{info.name}</Link>
    ) : (
      info.name
    )}
  </li>
))}
 </ul>



            <p>Created by Q3 Visuals
                all rights reserved playa playa
            </p>


        </footer>
    )
}

export default Footer2