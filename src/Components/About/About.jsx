import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import about_img from '../../assets/about.jpg'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_img} alt="Rizal Haryaputra" />
                </div>
                
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m Rizal Haryaputra, a high-achieving <strong>Fullstack Web Developer</strong> specializing in the <strong>Laravel Ecosystem</strong> and <strong>AI Integration</strong>. My journey is defined by a commitment to innovation, demonstrated by winning the <strong>1st Place National Abdidaya Award 2025</strong>. I am the creator of 'SADAKAH', a platform officially <strong>adopted by the Gunungkidul Government</strong>.</p>
                        <p>Beyond academic excellence, I have professional experience as a <strong>Remote IT Support Specialist</strong> and have secured <strong>Intellectual Property Rights (HKI)</strong> for commercial projects. I ensure that every solution I build is not only technically robust but also impactful. Let’s collaborate and turn your visionary ideas into reality!</p>
                    </div>
                    
                    <div className="about-skills">
                        <div className="about-skill"><p>Laravel</p><div className="skill-bar"><span style={{ width: "85%" }}></span></div></div>
                        <div className="about-skill"><p>Javascript</p><div className="skill-bar"><span style={{ width: "70%" }}></span></div></div>
                        <div className="about-skill"><p>React & Vue</p><div className="skill-bar"><span style={{ width: "65%" }}></span></div></div>
                        <div className="about-skill"><p>Tailwind</p><div className="skill-bar"><span style={{ width: "75%" }}></span></div></div>
                        <div className="about-skill"><p>MySql</p><div className="skill-bar"><span style={{ width: "70%" }}></span></div></div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h2>10+</h2>
                    <p>Web Development Projects Completed</p>
                </div>
                {/* Garis pemisah ditangani oleh CSS border */}
                <div className="about-achievement">
                    <h2>5+</h2>
                    <p>Web Development Trainings Completed</p>
                </div>
                <div className="about-achievement">
                    <h2>5+</h2>
                    <p>Tools Mastered</p>
                </div>
            </div>
        </div>
    )
}

export default About;   