import '../styles/contact.css';
import { useState, useEffect } from 'react';
const Contact = ({ languageSetup }) => {

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [textFieldField, setTextField] = useState('');

    const [contactData, setContactData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(`https://fakeapi.lyteloli.work/form?lang=${languageSetup}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setContactData(data);
                setIsPending(false);
            })
            .catch(error => {
                setError(error);
                setIsPending(false);
            });
    }, [languageSetup]);

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
                <div className="contact-main-box">
                    {contactData && <img src={contactData.banner_image} alt="contact-banner" className="contact-banner-img" />}
                    <div className="contact-left">
                        <div className="contact-details">
                            <div className="contact-detail-info">
                                <span className="contact-detail-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>
                                <div className="contact-detail-key-value">
                                    <div className="contact-detail-key">
                                        {contactData && <span className="contact-detail-key-text">{contactData.address}</span>}
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
                                        {contactData && <span className="contact-detail-key-text">{contactData.phone}</span>}
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
                                        {contactData && <span className="contact-detail-key-text">{contactData.email}</span>}
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
                            <form onSubmit={handleSubmit} className="contact-form">
                                {contactData && <label htmlFor="name-field" className="contact-field-label">{contactData.name}</label>}
                                <input type="text" name="name-field" value={nameField} onChange={nameFieldChange} className="contact-input-field" required minLength='3' />
                                {contactData && <label htmlFor="email-field" className="contact-field-label">{contactData.email}</label>}
                                <input type="email" name="email-field" value={emailField} onChange={emailFieldChange} className="contact-input-field" required />
                                {contactData && <label htmlFor="textarea-field" className="contact-field-label">{contactData.body}</label>}
                                <textarea value={textFieldField} onChange={textFieldChange} cols="30" rows="10" name="textarea-field" className="contact-textarea-field" required></textarea>
                                {contactData && <input type="submit" className="contact-submit-btn" value={contactData.send_button} />}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;