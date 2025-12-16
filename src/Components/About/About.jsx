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
                        <div className="about-para">
                            <p>I’m Rizal Haryaputra, a high-achieving <strong>Fullstack Web Developer</strong> specializing in the <strong>Laravel Ecosystem (TALL Stack)</strong> and <strong>AI Integration</strong>. My journey is defined by a commitment to innovation, demonstrated by winning the <strong>1st Place National Abdidaya Award 2025</strong>. I am the creator of 'SADAKAH', a platform officially <strong>adopted by the Gunungkidul Government</strong>.</p>
                            <p>Beyond academic excellence, I have professional experience as a <strong>Remote IT Support Specialist</strong> and have secured <strong>Intellectual Property Rights (HKI)</strong> for commercial projects. I ensure that every solution I build is not only technically robust but also impactful. Let’s collaborate and turn your visionary ideas into reality!</p>
                        </div>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Laravel</p><hr style={{ width: "85%" }} /></div>
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