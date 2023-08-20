import '../styles/home.css';
import Homeimages from './Homeimages';
import banner from '../assets/bg2.png'
import { useState, useEffect } from 'react';

const Home = () => {
    const [categoryImages, setCategoryImages] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(`https://fakeapi.lyteloli.work/?lang=en`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCategoryImages(data.images);
                setIsPending(false);
            })
            .catch(error => {
                setError(error);
                setIsPending(false);
            });
    }, []);

    return (
        <div className="content">
            <div className="home-content">
                <div className="home-banner">
                    <div className="home-banner-image">
                        <img src={banner} alt="" className="home-banner-img" />
                    </div>
                </div>
                <div className="home-category-area">
                    <div className="home-art-categories">
                        {categoryImages && <Homeimages categoryImages={categoryImages} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;