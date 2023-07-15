import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-brand">
                    <div className="navbar-brand-name">
                        <span className="nav-brand-name-title">DagHol</span>
                    </div>
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-links">
                    <div className="navbar-links-social">

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;