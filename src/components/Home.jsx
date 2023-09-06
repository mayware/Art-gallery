import '../styles/home.css';
import Homeimages from './Homeimages';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Home = ({ languageSetup }) => {
    const [homeImages, sethomeImages] = useState(null);
    const [welcomeText, setWelcomeText] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        localStorage.removeItem('activeButton');
        fetch(`https://fakeapi.lyteloli.work/?lang=${languageSetup}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                sethomeImages(data);
                setWelcomeText(data.text_homepage.replace('website.', 'website.<br/><br/>'));
                setIsPending(false);
            })
            .catch(error => {
                setError(error);
                setIsPending(false);
            });
    }, [languageSetup]);

    const [ref, inView] = useInView({
        rootMargin: '0px 0px -30% 0px',
        triggerOnce: true,
    });

    return (
        <div className="content">
            <div className="home-content">
                <div className="home-banner">
                    <div className="home-banner-image">
                        {homeImages && (
                            <img src={homeImages.banner_image} alt="" className="home-banner-img" />
                        )}
                    </div>
                </div>
                <div className="home-category-area">
                    <div className="home-art-categories">
                        {homeImages && <Homeimages homeImages={homeImages} />}
                        <div className="welcome-info-info">
                            <div className="home-welcome-info">
                                {welcomeText && (
                                    <span
                                        ref={ref}
                                        className={`home-welcome-info-text ${inView ? 'reveal' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: welcomeText }}
                                    />
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
