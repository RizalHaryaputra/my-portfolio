import React from 'react';
import './Modal.css';
import menu_close from '../../assets/menu_close.svg';

const Modal = ({ show, onClose, title, message, type }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className={`modal-content ${type}`} onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{title}</h3>
                    <img src={menu_close} alt="Close" onClick={onClose} className="modal-close-icon" />
                </div>
                <div className="modal-body">
                    <p>{message}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="modal-btn">Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;