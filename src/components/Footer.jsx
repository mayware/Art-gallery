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
                <div className="footer-right">
                    <Scrollupbutton />
                </div>
            </div>
        </div>
    );
}

export default Footer;