import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/my_logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    // Fungsi untuk membuka menu
    const openMenu = () => {
        setMenuOpen(true);
    };

    // Fungsi untuk menutup menu
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className='navbar'>
            <img width="50rem" src={logo} alt="logo" className="logo" />

            {/* Tombol untuk membuka menu pada tampilan mobile */}
            <img 
                src={menu_open} 
                onClick={openMenu} 
                className="nav-mob-open" 
                alt="Open Menu" 
                aria-label="Open Menu" 
            />

            {/* Menu Navigasi */}
            <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                {/* Tombol untuk menutup menu pada tampilan mobile */}
                <img 
                    src={menu_close} 
                    onClick={closeMenu} 
                    className='nav-mob-close' 
                    alt="Close Menu" 
                    aria-label="Close Menu" 
                />
                
                {/* Item Menu */}
                <li onClick={() => setMenu('home')}>
                    <AnchorLink className='link' href='#home' offset={50}>
                        <p>Home</p>
                        {menu === 'home' && <img src={underline} alt="underline" />}
                    </AnchorLink>
                </li>
                <li onClick={() => setMenu('about')}>
                    <AnchorLink className='link' href='#about' offset={50}>
                        <p>About Me</p>
                        {menu === 'about' && <img src={underline} alt="underline" />}
                    </AnchorLink>
                </li>
                <li onClick={() => setMenu('services')}>
                    <AnchorLink className='link' href='#services' offset={50}>
                        <p>Services</p>
                        {menu === 'services' && <img src={underline} alt="underline" />}
                    </AnchorLink>
                </li>
                <li onClick={() => setMenu('portfolio')}>
                    <AnchorLink className='link' href='#portfolio' offset={50}>
                        <p>Portfolio</p>
                        {menu === 'portfolio' && <img src={underline} alt="underline" />}
                    </AnchorLink>
                </li>
                <li onClick={() => setMenu('contact')}>
                    <AnchorLink className='link' href='#contact' offset={50}>
                        <p>Contact</p>
                        {menu === 'contact' && <img src={underline} alt="underline" />}
                    </AnchorLink>
                </li>
            </ul>

            {/* Tombol "Connect With Me" yang hanya muncul pada layar besar */}
            <div className="nav-connect">
                <AnchorLink className='link' href='#contact' offset={50}>Connect With Me</AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
