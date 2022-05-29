import React from 'react'
import { AiOutlineShopping,AiFillFolderAdd } from 'react-icons/ai';
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
    return (
        <nav className='back'>
            <Link className="nav-link text-light Link" to="/" > ADD-SHOPS</Link>

            <div className="icons">
                <div className="menu-items">
                    <Link className="nav-link text-light Link" to="home">FILTER SHOPS</Link>
                </div>
                <div className="mobile-menu-icon">
                    <FaBars onClick={toggle} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar