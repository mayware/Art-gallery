import '../styles/contact.css';
import { useState } from 'react';
const Contact = () => {

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [textFieldField, setTextField] = useState('');

    function nameFieldChange(event) {
        setNameField(event.target.value);
    }

    function emailFieldChange(event) {
        setEmailField(event.target.value);
    }

    function textFieldChange(event) {
        setTextField(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            name: nameField,
            email: emailField,
            body: textFieldField
        };

        fetch('https://fakeapi.lyteloli.work/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('POST response:', data);
                setNameField('');
                setEmailField('');
                setTextField('');
            })
            .catch(error => {
                console.error('Error sending POST request:', error);
            });
    }


    return (
        <div className="content">
            <div className="contact-content">
                <div className="contact-left">
                    <div className="contact-details">
                        <div className="contact-detail-info">
                            <span className="contact-detail-icon">
                                <i className="fa-solid fa-location-dot"></i>
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
                                <i className="fa-solid fa-phone-volume"></i>
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
                                <i className="fa-solid fa-envelope"></i>
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
                        <form onSubmit={handleSubmit} className="contact-form">
                            <label htmlFor="name-field" className="contact-field-label">Name</label>
                            <input type="text" name="name-field" value={nameField} onChange={nameFieldChange} className="contact-input-field" placeholder="Enter your full Name" required minLength='3' />
                            <label htmlFor="email-field" className="contact-field-label">Email</label>
                            <input type="email" name="email-field" value={emailField} onChange={emailFieldChange} className="contact-input-field" placeholder="Enter your Email" required />
                            <label htmlFor="textarea-field" className="contact-field-label">Comment or Message</label>
                            <textarea value={textFieldField} onChange={textFieldChange} cols="30" rows="10" name="textarea-field" className="contact-textarea-field" placeholder="Write something.." required></textarea>
                            <input type="submit" className="contact-submit-btn" value="SEND MESSAGE" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;