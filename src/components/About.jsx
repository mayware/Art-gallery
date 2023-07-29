import { useEffect } from "react";
import '../styles/about.css';
const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="about-content">
                <div className="about-banner">

                </div>
            </div>
        </div>
    );
}

export default About;