import '../styles/about.css';
import authorImage from '../assets/author-image.jpg';
import useFetch from '../useFetch';
import { useEffect, useState } from 'react';

const About = ({ languageSetup }) => {
    const [aboutLanguage, setAboutLanguage] = useState('');
    const { aboutData } = useFetch(`https://fakeapi.lyteloli.work/about?lang=${languageSetup}`);

    useEffect(() => {
        console.log(languageSetup);
    }, [languageSetup])

    return (
        <div className="content">
            <div className="about-content">
                <div className="about-block">
                    <div className="about-left">
                        <div className="about-information">
                            <span className="author-information-text">
                                <span className="about-host-name">Dag Hol</span>
                                (born 26 October 1951, in Hamburg) is a Norwegian figurative painter and graphic artist. He is educated at the Norwegian National Academy of Fine Arts (1980-1984) and has been a student of Gunnar Dietrichson and Odd Nerdrum. Earlier he studied Nordic, French, German and Sanskrit language and literature at the University of Oslo.
                                <br></br>
                                {aboutData && <span>{aboutData.text}</span>}
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