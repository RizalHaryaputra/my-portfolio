import React from 'react';
import './Footer.css';
import logo from '../../assets/my_logo.png';
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img width="50rem" src={logo} alt="" style={{ marginBottom: '1rem' }} />
                    <p>Thank you for visiting. I am ready to leverage my fullstack expertise to build scalable, high-impact solutions for your business. Let's discuss how we can create value together.</p>
                </div>
                <div className="footer-top-right">
                    {/* <div className="footer-email-input">
                        <img src={user_icon} />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div> */}
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>&copy; {new Date().getFullYear()} All rights reserved</p>
                </div>
                <div className="footer-bottom-right">
                    <a href="/cv-rizal-haryaputra-2025.pdf" download="cv-rizal-haryaputra-2025.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p>My Resume</p>
                    </a>
                    <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p>Connect with Me</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer