import '../styles/about.css';
import authorImage from '../assets/author-image.jpg';
import { useEffect, useState } from 'react';

const About = ({ languageSetup }) => {
    const [aboutLanguage, setAboutLanguage] = useState('');
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://fakeapi.lyteloli.work/about?lang=${languageSetup}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAboutData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [languageSetup]);

    return (
        <div className="content">
            <div className="about-content">
                <div className="about-block">
                    <div className="about-left">
                        <div className="about-information">
                            <span className="author-information-text">
                                <span className="about-host-name">Dag Hol</span>
                                {aboutData && <span>{aboutData.text}</span>}
                                <br></br>
                            </span>
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="about-author-illustration">
                            <img className="about-author-img" src={authorImage} alt="author-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;