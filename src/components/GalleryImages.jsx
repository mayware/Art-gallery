const GalleryImages = ({ images }) => {
    return (
        <div className="gallery-images">
            {images.map((image) => (
                <div className="gallery-image-box" key={image.id}>
                    <div className="gallery-image-pic"></div>
                    <div className="gallery-image-desc"></div>
                </div>
            ))}
        </div>
    );
}

export default GalleryImages;