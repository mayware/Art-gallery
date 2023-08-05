import { useEffect } from "react";
import '../styles/contact.css';
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="contact-content">
                <div className="contact-left">
                    <div className="contact-details">
                        <div className="contact-detail-info">
                            <span className="contact-detail-icon">
                                <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <div className="contact-detail-key-value">
                                <div className="contact-detail-key">
                                    <span className="contact-detail-key-text">Address</span>
                                </div>
                                <div className="contact-detail-value">
                                    <span className="contact-detail-value-text">Nils Lauritssøns vei 26, 0854 Oslo</span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-detail-info">
                            <span className="contact-detail-icon">
                                <i class="fa-solid fa-phone-volume"></i>
                            </span>
                            <div className="contact-detail-key-value">
                                <div className="contact-detail-key">
                                    <span className="contact-detail-key-text">Phone</span>
                                </div>
                                <div className="contact-detail-value">
                                    <span className="contact-detail-value-text">+47 99 29 99 92</span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-detail-info">
                            <span className="contact-detail-icon">
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            <div className="contact-detail-key-value">
                                <div className="contact-detail-key">
                                    <span className="contact-detail-key-text">Email</span>
                                </div>
                                <div className="contact-detail-value">
                                    <span className="contact-detail-value-text">dag@daghol.no</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-form-box">
                        <div className="contact-form-title">
                            <div className="contact-form-title-text">Contact Me</div>
                        </div>
                        <form action="POST" className="contact-form">
                            <label htmlFor="name-field" className="contact-field-label">Name</label>
                            <input type="text" name="name-field" className="contact-input-field" placeholder="Enter your full Name" required />
                            <label htmlFor="email-field" className="contact-field-label">Email</label>
                            <input type="email" name="email-field" className="contact-input-field" placeholder="Enter your Email" required />
                            <label htmlFor="textarea-field" className="contact-field-label">Comment or Message</label>
                            <textarea cols="30" rows="10" name="textarea-field" className="contact-textarea-field" placeholder="Write something.." required></textarea>
                            <input type="submit" className="contact-submit-btn" value="SEND MESSAGE" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;