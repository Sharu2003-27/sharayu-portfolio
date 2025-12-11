import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                            I'll try my best to get back to you!
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span>Email:</span>
                                <a href="mailto:sharayu@example.com">sharayu@example.com</a>
                            </div>
                            <div className="contact-item">
                                <span>Location:</span>
                                <p>Pune, India</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
