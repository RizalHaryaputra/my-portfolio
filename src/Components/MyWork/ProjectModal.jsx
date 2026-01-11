import React from 'react';
import './ProjectModal.css';
import menu_close from '../../assets/menu_close.svg';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="project-modal-overlay" onClick={onClose}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="project-modal-header">
                    <h2>{project.w_name}</h2>
                    <img src={menu_close} alt="Close" onClick={onClose} className="close-icon" />
                </div>
                
                <div className="project-modal-body">
                    <div className="project-image-container">
                        <img src={project.w_img} alt={project.w_name} />
                    </div>
                    
                    <div className="project-info">
                        <h3>About Project</h3>
                        <p>{project.w_desc}</p>
                        
                        <div className="project-tags">
                            {project.w_tags.map((tag, index) => (
                                <span key={index} className="tag-pill">{tag}</span>
                            ))}
                        </div>

                        <div className="project-actions">
                            <a href={project.w_link} target="_blank" rel="noopener noreferrer" className="btn-visit">
                                Visit Website 
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '8px'}}>
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;