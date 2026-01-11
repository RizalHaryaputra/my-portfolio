import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/my_logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Fungsi toggle
    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className='navbar'>
            <img src={logo} alt="logo" className="logo" />

            {/* Tombol Buka Menu (Hamburger) */}
            <img 
                src={menu_open} 
                onClick={openMenu} 
                className="nav-mob-open" 
                alt="Open Menu" 
            />

            {/* Container Menu */}
            <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                {/* Tombol Tutup Menu (X) */}
                <img 
                    src={menu_close} 
                    onClick={closeMenu} 
                    className='nav-mob-close' 
                    alt="Close Menu" 
                />
                
                {/* Item Menu */}
                {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                    <li key={item} onClick={() => { setMenu(item); closeMenu(); }}>
                        <AnchorLink className='link' href={`#${item}`} offset={50}>
                            <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
                            {menu === item && <img src={underline} alt="underline" className="nav-underline"/>}
                        </AnchorLink>
                    </li>
                ))}
            </ul>

            <div className="nav-connect">
                <AnchorLink className='link' href='#contact' offset={50}>Connect With Me</AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;