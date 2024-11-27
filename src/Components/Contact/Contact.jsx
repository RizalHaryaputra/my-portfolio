import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "17796a89-0018-46b2-b238-8384fe6bfe6e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            alert("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Contact Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let’s Talk</h1>
                    <p>Feel free to get in touch! Whether you have a project in mind or simply want to say hello, I’d love to hear from you. Drop me a message and let’s make something great together. I’m always open to new opportunities and collaborations.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>rzlhryptr@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Sleman, Yogyakarta, Indonesia</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+62 878 5503 8324</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" id='name' />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" id='email' />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message" id='message'></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact