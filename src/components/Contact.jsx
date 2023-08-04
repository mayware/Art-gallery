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
                    <div className="contact-illustration">
                        <div className="contact-illustration-headline">
                            <span className="contact-headline-text">

                            </span>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-form-box">
                        <form action="POST" className="contact-form">
                            <label htmlFor="name-field">Name</label>
                            <input type="text" name="name-field" className="contact-name-field" required />
                            <label htmlFor="email-field">Email</label>
                            <input type="email" name="email-field" className="contact-email-field" required />
                            <label htmlFor="textarea-field">Comment or Message</label>
                            <textarea cols="30" rows="10" name="textarea-field" className="contact-textarea-field" required></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;