import react, {useState} from 'react'
import '../styles/navbar.css'
import search from '../media/search_bar.jpeg'

const Navbar = () => {

    const [isClicked, setIsClicked] = useSa

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

             <img src={search}
             />

             </div>
               
        </div>
    )
}

export default Navbar