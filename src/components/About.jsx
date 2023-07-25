import { useEffect } from "react";
const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="about-content">

            </div>
        </div>
    );
}

export default About;