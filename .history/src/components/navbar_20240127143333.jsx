import react from 'react'
import '../styles/navbar.css'


const Navbar = () => {

    return (
        <div className='navbar-container'>
             <p>Chris Musial</p>
             
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
                
             </ul>
               
        </div>
    )
}

export default Navbar