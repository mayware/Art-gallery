import '../styles/modal.css';

const Modal = ({ closeModal, selectedImage, galleryImages, openModal }) => {
    const currentIndex = galleryImages.findIndex((image) => image.id === selectedImage.id);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        openModal(galleryImages[nextIndex]);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        openModal(galleryImages[prevIndex]);
    };

    const isPrevButtonDisabled = currentIndex === 0;
    const isNextButtonDisabled = currentIndex === galleryImages.length - 1;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close-modal-btn" onClick={closeModal}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="modal-body-image">
                        <img src={selectedImage.link} alt="modal-image" className="modal-image-img" />
                        <a href={selectedImage.imalinkge} target='_blank' className='modal-image-fullsize-link'>
                            <i className="fa-solid fa-expand"></i>
                        </a>
                    </div>
                    <div className="modal-body-footer">
                        <button className="modal-nav-btn" onClick={handlePrev} disabled={isPrevButtonDisabled}>
                            <i className="fa-solid fa-caret-left"></i>
                        </button>
                        <span className="modal-image-desc">
                            <div className="modal-image-desc-title">
                                {selectedImage.title}
                            </div>
                            <div className="modal-image-desc-size">
                                {selectedImage.size}
                                {/* {selectedImage.category} */}
                            </div>
                        </span>
                        <button className="modal-nav-btn" onClick={handleNext} disabled={isNextButtonDisabled}>
                            <i className="fa-solid fa-caret-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
