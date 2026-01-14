import React, { useState, useEffect } from 'react'
import './Navbar.css';
import logo from '../../assets/my_logo.png';
import underline from '../../assets/nav_underline.svg';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = -50;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    useEffect(() => {
        if (location.pathname === '/') {
            if (location.hash) {
                setMenu(location.hash.replace('#', ''));
            } else {
                setMenu('home');
            }
        } else {
            setMenu(''); 
        }
    }, [location]);

    return (
        <div className='navbar'>
            <a href="/">
                <img src={logo} alt="logo" className="logo" />
            </a>
            <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt="Open Menu" />

            <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt="Close Menu" />

                {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                    <li key={item} onClick={() => { setMenu(item); closeMenu(); }}>
                        <HashLink
                            smooth
                            to={`/#${item}`}
                            scroll={scrollWithOffset}
                            className='link'
                        >
                            <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
                            {menu === item && <img src={underline} alt="underline" className="nav-underline" />}
                        </HashLink>
                    </li>
                ))}
            </ul>

            <div className="nav-connect">
                <HashLink smooth to='/#contact' scroll={scrollWithOffset} className='link'>
                    Connect With Me
                </HashLink>
            </div>
        </div>
    );
};

export default Navbar;