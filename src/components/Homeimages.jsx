import { Link } from "react-router-dom";

const Homeimages = ({ categoryImages }) => {
    return (
        <>
            {categoryImages.map((image) => (
                <Link
                    to={{
                        pathname: '/gallery',
                        search: `?category=${image.category[0]}`
                    }}
                    className="category-illustration"
                    key={image.id}>
                    <div className="overlay">
                        <span className="image-title">{image.category[0]}</span>
                    </div>
                    <img src={image.link} className='category-img' alt="" />
                </Link>
            ))}
        </>
    );
}

export default Homeimages;