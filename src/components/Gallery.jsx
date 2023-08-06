import '../styles/gallery.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../useFetch';
import GalleryImages from './GalleryImages';
import Filterbar from './Filterbar';
import Modal from './Modal';

const Gallery = () => {
    const [imageNumber, setImageNumber] = useState(12);
    const { data: galleryImages, totalImages, error, isPending } = useFetch(`https://api.npoint.io/7873dbcb044096724539`, imageNumber);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    const [activeButton, setActiveButton] = useState('All');

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
        if (galleryImages && galleryImages.length < totalImages) {
            setImageNumber(imageNumber + 12);
        }
    }
    function changeFilter(filterBtn) {
        setActiveButton(filterBtn);
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        if (categoryParam) {
            setActiveButton(categoryParam);
        }
    }, [categoryParam]);

    return (
        <div className="content">
            <div className="gallery-content">
                <div className="gallery-box">
                    <div className="gallery-banner">
                        <div className="gallery-banner-quote">
                            <span className="gallery-banner-quote-text">
                                "Whoever marries the spirit of this age will find himself a widower in the next."
                            </span>
                            <span className="gallery-banner-quote-author">- Soeren Kierkegaard</span>
                        </div>
                    </div>
                    <div className="gallery-set">
                        <div className="filter-tab">
                            <Filterbar activeButton={activeButton} changeFilter={changeFilter} />
                        </div>
                        {galleryImages && <GalleryImages galleryImages={galleryImages} openModal={openModal} />}
                        {modalVisibility && <Modal closeModal={closeModal}
                            selectedImage={selectedImage}
                            galleryImages={galleryImages}
                            openModal={openModal} />}
                    </div>
                    <div className="gallery-box-footer">
                        <div className="gallery-images-uploader">
                            {galleryImages && galleryImages.length < totalImages && (
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