import React from 'react'
import './Hero.css';
import profile_img from '../../assets/my_profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="profile image" />
            <h1><span>Hi, I’m Rizal Haryaputra, </span>Junior Web Developer based in Indonesia</h1>
            {/* <p>This is a paragraph of text</p> */}
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='link' href='#contact' offset={50}>Connect With Me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero