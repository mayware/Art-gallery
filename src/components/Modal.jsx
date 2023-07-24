import '../styles/modal.css';

const Modal = ({ closeModal, selectedImage }) => {
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
                    <div className="modal-body-desc">
                        <span className="modal-image-dec">
                            {selectedImage.title}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;