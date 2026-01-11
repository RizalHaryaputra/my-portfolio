import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import github_icon from '../../assets/github_icon.svg';
import instagram_icon from '../../assets/instagram_icon.svg';
import Modal from '../Modal/Modal'; 

const Contact = () => {
    
    const [modal, setModal] = useState({
        show: false,
        title: "",
        message: "",
        type: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const closeModal = () => {
        setModal({ ...modal, show: false });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setModal({
                    show: true,
                    title: "Success!",
                    message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
                    type: "success"
                });
                event.target.reset();
            } else {
                setModal({
                    show: true,
                    title: "Error!",
                    message: data.message || "Something went wrong. Please try again.",
                    type: "error"
                });
            }
        } catch (error) {
            setModal({
                show: true,
                title: "Error!",
                message: "Network error. Please check your connection.",
                type: "error"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id='contact' className="contact">
            {/* Render Modal Component */}
            <Modal 
                show={modal.show} 
                onClose={closeModal} 
                title={modal.title} 
                message={modal.message} 
                type={modal.type}
            />

            <div className="contact-title">
                <h1>Contact Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let’s Talk</h1>
                    <p>Feel free to get in touch! Whether you have a project in mind or simply want to say hello, I’d love to hear from you. Drop me a message and let’s make something great together.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Sleman, Yogyakarta, Indonesia</p>
                        </div>
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <a href="mailto:rzlhryptr@gmail.com">
                                <p>rzlhryptr@gmail.com</p>
                            </a>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <a href="https://wa.me/6287855038324?text=Hi%2C%20Rizal">
                                <p>+62 878 5503 8324</p>
                            </a>
                        </div>
                        {/* Social Media Links */}
                        <div className="contact-detail">
                            <img src={github_icon} alt="Github" style={{ width: '30px', height: '30px' }} />
                            <a href="https://github.com/RizalHaryaputra" target="_blank" rel="noopener noreferrer">
                                <p>RizalHaryaputra</p>
                            </a>
                        </div>
                        <div className="contact-detail">
                            <img src={instagram_icon} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                            <a href="https://www.instagram.com/rzalhrya_" target="_blank" rel="noopener noreferrer">
                                <p>rzalhrya_</p>
                            </a>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" id='name' required />
                    
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" id='email' required />
                    
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message" id='message' required></textarea>
                    
                    <button 
                        type="submit" 
                        className={`contact-submit ${isSubmitting ? 'disabled' : ''}`} 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Submit now"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;