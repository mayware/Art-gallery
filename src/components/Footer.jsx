import '../styles/footer.css';
import Scrollupbutton from './Scrollupbutton';
import brandLogo from '../assets/dag_logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <div className="footer-brand-name">
                        <img src={brandLogo} alt="" className="footer-brand-name-logo" />
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