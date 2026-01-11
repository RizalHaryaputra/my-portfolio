import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import ProjectModal from './ProjectModal'; // Import modal

const MyWork = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (work) => {
        setSelectedProject(work);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div id='portfolio' className="mywork">
            {/* Modal Component */}
            <ProjectModal project={selectedProject} onClose={closeModal} />

            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <div key={index} className="mywork-card" onClick={() => openModal(work)}>
                            <div className="card-image-wrapper">
                                <img src={work.w_img} alt={work.w_name} />
                                <div className="card-overlay">
                                    <span>Click for Details</span>
                                </div>
                            </div>
                            <div className="card-info">
                                <h3>{work.w_name}</h3>
                                {/* Menampilkan tag pertama sebagai kategori singkat */}
                                <p>{work.w_tags && work.w_tags[0]}</p> 
                            </div>
                        </div>
                    )
                })}
            </div>
            
            {/* Opsional: Tombol Show More jika project > 6 */}
            {/* <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div> */}
        </div>
    )
}

export default MyWork;