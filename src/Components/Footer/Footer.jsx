import React from 'react';
import './Footer.css';
import logo from '../../assets/my_logo.png';
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img width="50rem" src={logo} alt="" style={{marginBottom: '1rem'}}/>
                    <p>Thank you for visiting my portfolio. As a junior web developer, I’m constantly developing my skills and experience to create innovative web solutions. Feel free to contact me for further discussions!</p>
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
                    <p>&copy; 2025 All rights reserved</p>
                </div>
                <div className="footer-bottom-right">
                    <p>Privacy Policy</p>
                    <p>Terms of Services</p>
                    <p>Connect with Me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer