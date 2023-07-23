import '../styles/galleryset.css';

const GalleryImages = ({ images, openModal }) => {
    return (
        <div className="gallery-images">
            {images.map((image) => (
                <div className="gallery-image-box" key={image.id}>
                    <button className="gallery-image-pic" onClick={() => openModal(image)}>
                        <img className='gallery-image-img' src={image.image} alt="gallery-image" />
                    </button>
                    <div className="gallery-image-desc">
                        <span className="gallery-image-title">
                            {image.title}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GalleryImages;