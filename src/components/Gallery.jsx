import '../styles/gallery.css';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import useFetch from '../useFetch';
import GalleryImages from './GalleryImages';
import Filterbar from './Filterbar';
import Modal from './Modal';
import galleryBanner from '../assets/gallery-banner.jpg'

const Gallery = ({ languageSetup }) => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [galleryAttribute, setGalleryAttribute] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [errors, setErrors] = useState(null);

    const initialActiveButton = localStorage.getItem('activeButton') || 'All';
    const [activeButton, setActiveButton] = useState(initialActiveButton);

    const [imageNumber, setImageNumber] = useState(12);
    const { galleryData: galleryImages, totalImages, error, isPending } = useFetch(`https://fakeapi.lyteloli.work/gallery?lang=en`, imageNumber, activeButton);

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
                setGalleryAttribute(data);
                setIsloading(false);
            })
            .catch(error => {
                setErrors(error);
                setIsloading(false);
            });
    }, [languageSetup]);

    useEffect(() => {
        if (categoryFromURL) {
            setActiveButton(categoryFromURL);
        }
    }, [categoryFromURL]);

    const filteredImages = activeButton === 'All'
        ? galleryImages
        : galleryImages
            ? galleryImages.filter(image =>
                activeButton === 'All' || image.category.includes(activeButton)
            )
            : [];

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

    return (
        <div className="content">
            <div className="gallery-content">
                <div className="gallery-box">
                    <div className="gallery-banner">
                        <img src={galleryBanner} alt="" className="gallery-banner-img" />
                        {galleryAttribute && (
                            <div className="gallery-banner-quote">
                                <span className="gallery-banner-quote-text">
                                    {galleryAttribute.gallery_quote}
                                </span>
                                <span className="gallery-banner-quote-author">- Soeren Kierkegaard</span>
                            </div>
                        )}
                    </div>
                    <div className="gallery-set">
                        <div className="filter-tab">
                            {galleryAttribute && <Filterbar galleryAttribute={galleryAttribute} activeButton={activeButton} changeFilter={changeFilter} />}
                        </div>
                        {filteredImages && <GalleryImages galleryImages={filteredImages} openModal={openModal} />}
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