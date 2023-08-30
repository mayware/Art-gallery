import '../styles/gallery.css';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import GalleryImages from './GalleryImages';
import Filterbar from './Filterbar';
import Modal from './Modal';
import galleryBanner from '../assets/gallery-banner.jpg'

const Gallery = ({ languageSetup }) => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const [galleryAttribute, setGalleryAttribute] = useState(null);
    const [galleryImages, setGalleryImages] = useState(null);
    const [imageNumber, setImageNumber] = useState(12);
    const [totalImages, setTotalImages] = useState(0);

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [activeButton, setActiveButton] = useState(null);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryFromURL = searchParams.get("category");

    useEffect(() => {
        fetch(`https://fakeapi.lyteloli.work/gallery?lang=${languageSetup}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                let filteredImages = data.images;
                if (data.categories.slice(1).includes(activeButton)) {
                    filteredImages = data.images.filter(image => image.category.includes(activeButton))
                }
                setGalleryImages(imageNumber ? filteredImages.slice(0, imageNumber) : data);
                setTotalImages(filteredImages.length);
                setGalleryAttribute(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error);
                setIsPending(false);
            });
    }, [languageSetup, imageNumber, activeButton]);

    useEffect(() => {
        if (categoryFromURL) {
            setActiveButton(categoryFromURL);
        }
    }, [categoryFromURL]);

    function changeFilter(filterBtn) {
        setActiveButton(filterBtn);
    }

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


    return (
        <div className="content">
            <div className="gallery-content">
                <div className="gallery-box">
                    <div className="gallery-banner">
                        <div className="gallery-quote-overlay">
                            {galleryAttribute && <img src={galleryAttribute.banner_image} alt="gallery-banner" className="gallery-banner-img" />}
                            {galleryAttribute && (
                                <div className="gallery-banner-quote">
                                    <span className="gallery-banner-quote-text">
                                        {galleryAttribute.gallery_quote}
                                    </span>
                                    <span className="gallery-banner-quote-author">- Soeren Kierkegaard</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="gallery-set">
                        <div className="filter-tab">
                            {galleryAttribute && <Filterbar categoryFromURL={categoryFromURL} galleryAttribute={galleryAttribute} activeButton={activeButton} changeFilter={changeFilter} />}
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