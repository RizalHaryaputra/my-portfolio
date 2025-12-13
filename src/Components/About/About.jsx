import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/my_profile.jpg'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern}></img>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img}></img>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m Rizal Haryaputra, a dedicated and ambitious Junior Web Developer from Indonesia with a passion for creating impactful and efficient web solutions. My journey in web development began with curiosity and quickly turned into a deep enthusiasm for coding and problem-solving. I specialize in building responsive, user-friendly websites using the latest technologies and best practices.</p>
                        <p>I am continuously learning and expanding my skill set to stay on top of industry trends and ensure that every project I work on meets the highest standards of quality. Let’s collaborate and turn your ideas into reality!</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Laravel</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>React</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>Tailwind</p><hr style={{ width: "75%" }} /></div>
                        <div className="about-skill"><p>MySql</p><hr style={{ width: "70%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Web Development Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Web Development Trainings Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Tools Mastered</p>
                </div>
            </div>
        </div>
    )
}

export default About