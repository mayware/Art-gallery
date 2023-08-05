import '../styles/home.css';
import { useEffect, useState } from 'react';
import Homeimages from './Homeimages';
import useFetch from '../useFetch';
const Home = () => {
    const { data: categoryImages, error, pending } = useFetch('https://api.npoint.io/56d2ce3d37ad758ef7a9');
    const [showImages, setShowImages] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            if (categoryImages && !showImages) {
                const firstImage = document.querySelector('.category-illustration');

                if (firstImage) {
                    const imageTop = firstImage.getBoundingClientRect().top;
                    if (imageTop < windowHeight) {
                        setShowImages(true);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [categoryImages, showImages]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="home-content">
                <div className="home-banner">
                    <div className="home-banner-image"></div>
                </div>
                {/* <div className="home-brief-information-box">

                </div> */}
                <div className="home-category-area">
                    <div className="home-art-categories">
                        {categoryImages && <Homeimages categoryImages={categoryImages} showImages={showImages} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;