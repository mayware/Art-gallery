import { useEffect } from "react";
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="contact-content">
                <div className="contact-form-box">
                    <form action="POST" className="contact-form"></form>
                </div>
            </div>
        </div>
    );
}

export default Contact;