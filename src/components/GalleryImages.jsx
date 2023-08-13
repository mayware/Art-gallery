import '../styles/galleryset.css';

const GalleryImages = ({ galleryImages, openModal }) => {
    return (
        <div className="gallery-images">
            {galleryImages.map((image) => (
                <button className="gallery-image-box" onClick={() => openModal(image)} key={image.id}>
                    <div className="gallery-image-pic">
                        <img className='gallery-image-img' src={image.link} alt="gallery-image" />
                    </div>
                    <div className="gallery-image-desc">
                        <span className="gallery-image-title">
                            {image.title}
                        </span>
                    </div>
                </button>
            ))}
        </div>
    );
}

export default GalleryImages;