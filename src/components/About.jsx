import { useEffect } from "react";
import '../styles/about.css';
import authorImage from '../assets/author-image.jpg';
const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="about-content">
                <div className="about-block">
                    <div className="about-left">
                        <div className="about-information">
                            <span className="author-information-text">
                                Dag Hol (born 26 October 1951, in Hamburg) is a Norwegian figurative painter and graphic artist. He is educated at the Norwegian National Academy of Fine Arts (1980-1984) and has been a student of Gunnar Dietrichson and Odd Nerdrum. Earlier he studied Nordic, French, German and Sanskrit language and literature at the University of Oslo. He has since he was 18–19 years old practised yoga and Acem-meditation regularly and this has influenced his artistic and philosophical point of view. He made his debut as an artist with his solo exhibition in 1983 in Oslo.
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