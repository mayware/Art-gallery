import { Link } from "react-router-dom";
const Homeimages = ({ categoryImages, showImages }) => {
    return (
        <>
            {categoryImages.map((image) => (
                <Link to={{
                    pathname: '/gallery',
                    search: `?category=${encodeURIComponent(image.title)}`,
                }} className={`category-illustration ${showImages ? 'show' : ''}`}
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