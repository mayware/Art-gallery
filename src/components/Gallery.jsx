import '../styles/gallery.css';
import { useState, useEffect } from 'react';
import useFetch from '../useFetch';
import GalleryImages from './GalleryImages';
import Modal from './Modal';

const Gallery = () => {
    const { data: images, error, pending } = useFetch('https://api.npoint.io/7873dbcb044096724539');
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
    useEffect(() => {
        console.log("Gallery component mounted.");
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="gallery-content">
                <div className="main-gallery">
                    <div className="gallery-banner">
                        {/* <span className="gallery-banner-quote">
                            "Whoever marries the spirit of this age will find himself a widower in the next." , Soeren Kierkegaard
                        </span> */}
                    </div>
                    <div className="gallery-set">
                        {images && <GalleryImages images={images} openModal={openModal} />}
                        {modalVisibility && <Modal closeModal={closeModal}
                            selectedImage={selectedImage}
                            images={images}
                            openModal={openModal} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;