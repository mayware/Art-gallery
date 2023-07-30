import '../styles/home.css';
import { useEffect } from 'react';
import Homeimages from './Homeimages';
import useFetch from '../useFetch';
const Home = () => {
    const { data: categoryImages, error, pending } = useFetch('https://api.npoint.io/56d2ce3d37ad758ef7a9');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="home-content">
                <div className="home-banner">
                    <div className="banner-image"></div>
                </div>
                <div className="home-category-area">
                    <div className="art-categories">
                        {categoryImages && <Homeimages categoryImages={categoryImages} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;