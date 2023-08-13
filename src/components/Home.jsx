import '../styles/home.css';
import { useEffect, useState } from 'react';
import Homeimages from './Homeimages';
import useFetch from '../useFetch';
import banner from '../assets/bg2.png'

const Home = () => {
    const [language, setLanguage] = useState('en');
    const { categoryImages } = useFetch(`https://fakeapi.lyteloli.work/?lang=${language}`);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="home-content">
                <div className="home-banner">
                    <div className="home-banner-image">
                        <img src={banner} alt="" className="home-banner-img" />
                    </div>
                </div>
                <div className="home-category-area">
                    {/* <div className="home-intro-information-box">
                        <div className="home-main-information-box">
                            <span className="home-main-info-text">
                                <span className="home-main-info-host-name">
                                    Dag Hol
                                </span>
                                is focusing on the Art of Doing in all his work, and opposes to the modern trend of putting the concept in the focus and main purpose in modern art, which he sees as too much linked to our age. Dag Hol thinks that the concept of art is growing from the accuracy, the deepening and the performing of the Doing of his hand and technique, and with which attitude the work is done.
                                The concept develops from the activity and the performing of the creativity expressed in the work itself. Like the creation of the universe is constantly unfolding from the inside of all the ever changing of masses and forms and the expression of energy, it is possible to see all this as a manifestation and movement of transcendent timelessness and metaphysical expression.
                                The creative process of an artist is at its best an expression of inner timeless energy and transparency of a metaphysical light, and will define the concept of the artwork in a natural way. Whatever the painting or the artwork is depicting the main theme will be the inner energy and expression of inner subtle reality expressed in the stroke of the brush or the line of the drawing.
                                Every brushstroke is a signature of the soul and that will be the theme of the artwork.
                            </span>
                        </div>
                    </div> */}
                    <div className="home-art-categories">
                        {categoryImages && <Homeimages categoryImages={categoryImages} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;