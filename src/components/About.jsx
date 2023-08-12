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
                                <span className="about-host-name">Dag Hol</span>
                                (born 26 October 1951, in Hamburg) is a Norwegian figurative painter and graphic artist. He is educated at the Norwegian National Academy of Fine Arts (1980-1984) and has been a student of Gunnar Dietrichson and Odd Nerdrum. Earlier he studied Nordic, French, German and Sanskrit language and literature at the University of Oslo.
                                <br></br>
                                <br></br>He has since he was 18–19 years old practised yoga and Acem-meditation regularly and this has influenced his artistic and philosophical point of view. He made his debut as an artist with his solo exhibition in 1983 in Oslo. Dag Hol is focusing on the Art of Doing in all his work, and opposes to the modern trend of putting the concept in the focus and main purpose in modern art, which he sees as too much linked to our age.
                            </span>
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="about-author-illustration">
                            <img className="about-author-img" src={authorImage} alt="author-image" />
                        </div>
                    </div>
                </div>
                {/* <div className="about-brief-description">
                    <span className="about-brief-desc-text">
                        Dag Hol thinks that the concept of art is growing from the accuracy, the deepening and the performing of the Doing of his hand and technique, and with which attitude the work is done. The concept develops from the activity and the performing of the creativity expressed in the work itself. Like the creation of the universe is constantly unfolding from the inside of all the ever changing of masses and forms and the expression of energy, it is possible to see all this as a manifestation and movement of transcendent timelessness and metaphysical expression. The creative process of an artist is at its best an expression of inner timeless energy and transparency of a metaphysical light, and will define the concept of the artwork in a natural way. Whatever the painting or the artwork is depicting the main theme will be the inner energy and expression of inner subtle reality expressed in the stroke of the brush or the line of the drawing. Every brushstroke is a signature of the soul and that will be the theme of the artwork.
                        Dag Hols art might seem old fashion today, but he is convinced that his visions are timeless and will survive our restless and superficial time....
                    </span>
                </div> */}
            </div>
        </div>
    );
}

export default About;