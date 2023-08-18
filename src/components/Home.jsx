import '../styles/home.css';
import Homeimages from './Homeimages';
import useFetch from '../useFetch';
import banner from '../assets/bg2.png'

const Home = () => {
    const { categoryImages } = useFetch(`https://fakeapi.lyteloli.work/?lang=en`);

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