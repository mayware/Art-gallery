import '../styles/gallery.css';
import { useState, useEffect } from 'react';
import useFetch from '../useFetch';
import GalleryImages from './GalleryImages';
import Filterbar from './Filterbar';
import Modal from './Modal';

const Gallery = () => {
    const [imageNumber, setImageNumber] = useState(12);
    const { data: images, totalImages, error, pending } = useFetch('https://api.npoint.io/7873dbcb044096724539', imageNumber);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    function openModal(image) {
        setModalVisibility(true);
        setSelectedImage(image);
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        setModalVisibility(false);
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    }

    function showMoreImages() {
        if (images && images.length < totalImages) {
            setImageNumber(imageNumber + 12);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="gallery-content">
                <div className="gallery-box">
                    <div className="gallery-banner">
                        <span className="gallery-banner-text">
                            "Whoever marries the spirit of this age will find himself a widower in the next." , Soeren Kierkegaard
                        </span>
                    </div>
                    <div className="gallery-set">
                        <div className="filter-tab">
                            <Filterbar />
                        </div>
                        {images && <GalleryImages images={images} openModal={openModal} />}
                        {modalVisibility && <Modal closeModal={closeModal}
                            selectedImage={selectedImage}
                            images={images}
                            openModal={openModal} />}
                    </div>
                    <div className="gallery-box-footer">
                        <div className="gallery-images-uploader">
                            {images && images.length < totalImages && (
                                <button className="gallery-show-more-btn" onClick={showMoreImages}>
                                    <span className="show-more-btn-title">Show more</span>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;