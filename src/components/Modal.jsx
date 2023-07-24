import '../styles/modal.css';

const Modal = ({ closeModal }) => {
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

                    </div>
                    <div className="modal-body-desc">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;