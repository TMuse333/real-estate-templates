import react from 'react'
import '../styles/navbar.css'


const Navbar = () => {

    return (
        <div className='navbar-container'>
             <p>Chris Musial</p>

             <div className='list-search-box'>
                
             <ul className='list-button'>
                <li>
                    Home
                </li>
                <li>
                    Process
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
             </ul>

             </div>
               
        </div>
    )
}

export default Navbar