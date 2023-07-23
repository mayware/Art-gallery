import '../styles/home.css';
import Filterbar from './Filterbar';
import catOne from '../assets/categories/4.jpg'
import catTwo from '../assets/categories/5.jpg'
import catThree from '../assets/categories/6.jpg'
import catFour from '../assets/categories/7.jpg'
import catFive from '../assets/categories/8.jpg'
import catSix from '../assets/categories/9.jpg'
import catSeven from '../assets/categories/10.jpg'
import catEight from '../assets/categories/11.jpg'
import banner from "../assets/1.jpg";
const Home = () => {

    return (
        <div className="content">
            <div className="home-content">
                <div className="home-banner">
                    <div className="banner-image"></div>
                </div>
                <div className="home-category-area">
                    <div className="filter-tab">
                        <Filterbar />
                    </div>
                    <div className="art-categories">
                        <div className="category-illustration">
                            <div className="overlay">
                                <span className="image-title">Image title</span>
                            </div>
                            <img src={catOne} className='category-img' alt="" />
                        </div>
                        <div className="category-illustration">
                            <div className="overlay">
                                <span className="image-title">Image title</span>
                            </div>
                            <img src={catFour} className='category-img' alt="" />
                        </div>
                        <div className="category-illustration">
                            <div className="overlay">
                                <span className="image-title">Image title</span>
                            </div>
                            <img src={catThree} className='category-img' alt="" />
                        </div>
                        <div className="category-illustration">
                            <div className="overlay">
                                <span className="image-title">Image title</span>
                            </div>
                            <img src={catTwo} className='category-img' alt="" />
                        </div>
                        <div className="category-illustration">
                            <div className="overlay">
                                <span className="image-title">Image title</span>
                            </div>
                            <img src={catFive} className='category-img' alt="" />
                        </div>
                        <div className="category-illustration">
                            <div className="overlay">
                                <span className="image-title">Image title</span>
                            </div>
                            <img src={catSix} className='category-img' alt="" />
                        </div>
                        <div className="category-illustration">
                            <div className="overlay">
                                <span className="image-title">Image title</span>
                            </div>
                            <img src={catFour} className='category-img' alt="" />
                        </div>
                        <div className="category-illustration">
                            <div className="overlay">
                                <span className="image-title">Image title</span>
                            </div>
                            <img src={catSeven} className='category-img' alt="" />
                        </div>
                        <div className="category-illustration">
                            <div className="overlay">
                                <span className="image-title">Image title</span>
                            </div>
                            <img src={catEight} className='category-img' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;