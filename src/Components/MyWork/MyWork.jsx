import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import theme_pattern from '../../assets/theme_pattern.svg';

const MyWork = () => {
    return (
        <div id='portfolio' className="mywork">
            <div className="mywork-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <div key={index} className="mywork-item">
                            <h3>{work.w_name}</h3>
                            <a href={work.w_link} target="_blank" rel="noreferrer">
                                <img src={work.w_img} alt="" />
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyWork;