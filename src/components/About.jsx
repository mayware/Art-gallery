import '../styles/about.css';
import authorImage from '../assets/author-image.jpg';
import useFetch from '../useFetch';
import { useEffect, useState } from 'react';

const About = ({ languageSetup }) => {
    const [aboutLanguage, setAboutLanguage] = useState('');
    const { aboutData } = useFetch(`https://fakeapi.lyteloli.work/about?lang=en`);

    return (
        <div className="content">
            <div className="about-content">
                <div className="about-block">
                    <div className="about-left">
                        <div className="about-information">
                            <span className="author-information-text">
                                <span className="about-host-name">Dag Hol</span>
                                {aboutData}
                                <br></br>
                                {/* {aboutData && <span>{aboutData.text}</span>} */}
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