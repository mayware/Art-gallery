import '../styles/navbar.css';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "active-link" : "";
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-brand">
                    <div className="navbar-brand-name">
                        <NavLink to="/" className="nav-brand-link">
                            <span className="nav-brand-name-title">DagHol</span>

                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-links">
                    <div className="navbar-page-links">
                        <NavLink to="/" className={`nav-link ${isActive("/")}`}>
                            <span className="nav-link-title">Home</span>
                        </NavLink>
                        <NavLink to={"/gallery"} className={`nav-link ${isActive("/gallery")}`}>
                            <span className="nav-link-title">Gallery</span>
                        </NavLink>
                        <NavLink to="/about" className={`nav-link ${isActive("/cv")}`}>
                            <span className="nav-link-title">About</span>
                        </NavLink>
                        <NavLink to="/cv" className={`nav-link ${isActive("/cv")}`}>
                            <span className="nav-link-title">CV</span>
                        </NavLink>
                        <NavLink to="/contact" className={`nav-link ${isActive("/cv")}`}>
                            <span className="nav-link-title">Contact</span>
                        </NavLink>
                    </div>
                    <div className="navbar-links-social">
                        <Link to="{}" className='nav-link'>
                            <span className='social-link-title'>
                                <i className="fa-brands fa-wikipedia-w"></i>
                            </span>
                        </Link>
                        <Link to="{}" className='nav-link'>
                            <span className='social-link-title'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
