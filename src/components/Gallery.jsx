import '../styles/gallery.css';
import { useState } from 'react';
import useFetch from '../useFetch';
import GalleryImages from './GalleryImages';
import Modal from './Modal';

const Gallery = () => {
    const { data: images, error, pending } = useFetch('https://api.npoint.io/7873dbcb044096724539');
    const [modalVisibility, setModalVisibility] = useState(false);

    function openModal(image) {
        setModalVisibility(true);
        // setSelectedBook(image);
    }

    function closeModal() {
        setModalVisibility(false);
        // setSelectedBook(null);
    }
    return (
        <div className="content">
            <div className="gallery-content">
                <div className="main-gallery">
                    <div className="gallery-slide-banner">

                    </div>
                    <div className="gallery-set">
                        {images && <GalleryImages images={images} openModal={openModal} />}
                        {modalVisibility && <Modal closeModal={closeModal} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;