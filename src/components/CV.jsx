import '../styles/cv.css';
import { useState, useEffect } from 'react';

const CV = ({ languageSetup }) => {
    const [cvData, setCvData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(`https://fakeapi.lyteloli.work/cv?lang=${languageSetup}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCvData(data);
                setIsPending(false);
            })
            .catch(error => {
                setError(error);
                setIsPending(false);
            });
    }, [languageSetup]);


    return (
        <div className="content">
            <div className="cv-content">
                <div className="cv-box">
                    <div className="cv-preview">
                        <div className="cv-preview-inner">
                            <div className="cv-host-name">
                                <span className='cv-host-name-text'>
                                    Daghol
                                </span>
                            </div>
                            <div className="cv-host-description">
                                <div className="cv-desc-summary">
                                    <div className="cv-desc-title">
                                        <span className="cv-desc-title-text">
                                            {cvData && cvData.section_title_1}
                                        </span>
                                    </div>
                                    <div className="cv-desc-summary-body">
                                        <span className="cv-desc-body-text">
                                            {cvData && cvData.text_1}
                                        </span>
                                    </div>
                                </div>
                                <div className="cv-desc-main">
                                    <div className="cv-desc-title">
                                        <span className="cv-desc-title-text">
                                            {cvData && cvData.section_title_2}
                                        </span>
                                    </div>
                                    <div className="cv-desc-body">
                                        <div className="cv-desc-body-info-list">
                                            {cvData && cvData.text_2 && cvData.text_2.split('.').map((item, index) => (
                                                <span key={index} className="cv-desc-list-item">
                                                    {item.trim()}<br />
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="cv-desc-additional">
                                    <div className="cv-desc-title">
                                        <span className="cv-desc-title-text">
                                            {cvData && cvData.section_title_3}
                                        </span>
                                    </div>
                                    <div className="cv-desc-body-info-list">
                                        <span className="cv-desc-list-item">
                                            {cvData && cvData.text_3 && cvData.text_3.split('.').map((item, index) => (
                                                <span key={index} className="cv-desc-list-item">
                                                    {item.trim()}<br />
                                                </span>
                                            ))}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CV;