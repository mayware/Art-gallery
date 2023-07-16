import '../styles/home.css';
import Carousel from "./Carousel"
import catOne from '../assets/categories/4.jpg'
import catTwo from '../assets/categories/5.jpg'
import catThree from '../assets/categories/6.jpg'
import catFour from '../assets/categories/7.jpg'
import catFive from '../assets/categories/8.jpg'
import catSix from '../assets/categories/9.jpg'
import catSeven from '../assets/categories/10.jpg'
import catEight from '../assets/categories/11.jpg'
const Home = () => {
    return (
        <div className="content">
            <div className="home-content">
                <div className="home-banner">
                    <div className="banner-images">
                        <Carousel />
                    </div>
                </div>
                <div className="home-categories">
                    <div className="category-illustration">
                        <img src={catOne} className='category-img' alt="" />
                    </div>
                    <div className="category-illustration">
                        <img src={catTwo} className='category-img' alt="" />
                    </div>
                    <div className="category-illustration">
                        <img src={catThree} className='category-img' alt="" />
                    </div>
                    <div className="category-illustration">
                        <img src={catFour} className='category-img' alt="" />
                    </div>
                    <div className="category-illustration">
                        <img src={catFive} className='category-img' alt="" />
                    </div>
                    <div className="category-illustration">
                        <img src={catSix} className='category-img' alt="" />
                    </div>
                    <div className="category-illustration">
                        <img src={catFour} className='category-img' alt="" />
                    </div>
                    <div className="category-illustration">
                        <img src={catSeven} className='category-img' alt="" />
                    </div>
                    <div className="category-illustration">
                        <img src={catEight} className='category-img' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;