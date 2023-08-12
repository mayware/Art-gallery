import '../styles/footer.css';
import Scrollupbutton from './Scrollupbutton';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <div className="footer-brand-name">
                        <span className="footer-brand-name-title">Daghol</span>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="footer-contact-details">
                        <div className="footer-contact-detail-info">
                            <span className="footer-contact-detail-icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <div className="footer-contact-detail-key-value">
                                <div className="footer-contact-detail-key">
                                    <span className="footer-contact-detail-key-text">Address:</span>
                                </div>
                                <div className="footer-contact-detail-value">
                                    <span className="footer-contact-detail-value-text">Nils Lauritssøns vei 26, 0854 Oslo</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact-detail-info">
                            <span className="footer-contact-detail-icon">
                                <i className="fa-solid fa-phone-volume"></i>
                            </span>
                            <div className="footer-contact-detail-key-value">
                                <div className="footer-contact-detail-key">
                                    <span className="footer-contact-detail-key-text">Phone:</span>
                                </div>
                                <div className="footer-contact-detail-value">
                                    <span className="footer-contact-detail-value-text">+47 99 29 99 92</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact-detail-info">
                            <span className="footer-contact-detail-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <div className="footer-contact-detail-key-value">
                                <div className="footer-contact-detail-key">
                                    <span className="footer-contact-detail-key-text">Email:</span>
                                </div>
                                <div className="footer-contact-detail-value">
                                    <span className="footer-contact-detail-value-text">dag@daghol.no</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <Scrollupbutton />
                </div>
            </div>
        </div>
    );
}

export default Footer;