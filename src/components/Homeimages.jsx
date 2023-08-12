import { Link } from "react-router-dom";
const Homeimages = ({ categoryImages }) => {
    return (
        <>
            {categoryImages.map((image) => (
                <Link
                    to={{
                        pathname: '/gallery',
                        search: `?category=${image.title}`
                    }}
                    className="category-illustration"
                    key={image.id}>
                    <div className="overlay">
                        <span className="image-title">{image.title}</span>
                    </div>
                    <img src={image.image} className='category-img' alt="" />
                </Link>
            ))}
        </>
    );
}

export default Homeimages;