import '../styles/modal.css';

const Modal = ({ closeModal, selectedImage, images, openModal }) => {
    const currentIndex = images.findIndex((image) => image.id === selectedImage.id);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        openModal(images[nextIndex]);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        openModal(images[prevIndex]);
    };

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
                        <img src={selectedImage.image} alt="modal-image" className="modal-image-img" />
                    </div>
                    <div className="modal-body-footer">
                        <button className="modal-nav-btn" onClick={handlePrev}>
                            <i class="fa-solid fa-caret-left"></i>
                        </button>
                        <span className="modal-image-dec">
                            {selectedImage.title}
                        </span>
                        <button className="modal-nav-btn" onClick={handleNext}>
                            <i class="fa-solid fa-caret-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
