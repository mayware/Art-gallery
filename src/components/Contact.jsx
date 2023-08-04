import { useEffect } from "react";
import '../styles/contact.css';
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="contact-content">
                <div className="contact-illustration">
                    <div className="contact-illustration-headline">
                        <span className="contact-headline-text">

                        </span>
                    </div>
                </div>
                <div className="contact-form-box">
                    <form action="POST" className="contact-form"></form>
                </div>
            </div>
        </div>
    );
}

export default Contact;