import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import './Navigation.css';
import {FaHome, FaTshirt, FaShoppingCart, FaUserAlt, FaAdjust, FaBars} from 'react-icons/fa';
import { SlNotebook } from "react-icons/sl";



const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Menu open: ", !isMenuOpen)
        console.log('nav class:', document.querySelector('nav').className);
    };

    return (
        <header>
            {/* Title */}
            <h1><FaAdjust />Fashion Fusion</h1>

            {/* Hamburger menu */}
            <div className='hamburger' onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Navigation links */}
            <nav className={isMenuOpen ? 'hamburger-active' : ''}> {/* display normally if false */}

                <ul>
                    <li>
                        <a href='/'><FaHome />Home</a>
                    </li>
                    <li>
                        <a href='/collections'><SlNotebook />Collections</a>
                    </li>
                    <li>
                        <a href='/customize'><FaTshirt />Customize Your Own T-Shirt</a>
                    </li>
                    <li>
                        <a href='/cart'><FaShoppingCart />Cart</a>
                    </li>
                    <li>
                        <a href='/profile'><FaUserAlt />Profile</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation   