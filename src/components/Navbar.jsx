import '../styles/navbar.css';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = ({ toggleSidebar, sidebarBtnIcon }) => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "active-link" : "";
    };

    function scrollToTheTop() {
        window.scrollTo(0, 0);
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-brand">
                    <div className="navbar-brand-name">
                        <NavLink to="/" className="nav-brand-link" onClick={scrollToTheTop}>
                            <span className="nav-brand-name-title">DagHol</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-links">
                    <div className="navbar-page-links">
                        <NavLink to="/" className={`nav-link ${isActive("/")}`} onClick={scrollToTheTop}>
                            <span className="nav-link-title">Home</span>
                        </NavLink>
                        <NavLink to={"/gallery"} className={`nav-link ${isActive("/gallery")}`} onClick={scrollToTheTop}>
                            <span className="nav-link-title">Gallery</span>
                        </NavLink>
                        <NavLink to="/about" className={`nav-link ${isActive("/cv")}`} onClick={scrollToTheTop}>
                            <span className="nav-link-title">About</span>
                        </NavLink>
                        <NavLink to="/cv" className={`nav-link ${isActive("/cv")}`} onClick={scrollToTheTop}>
                            <span className="nav-link-title">CV</span>
                        </NavLink>
                        <NavLink to="/contact" className={`nav-link ${isActive("/cv")}`} onClick={scrollToTheTop}>
                            <span className="nav-link-title">Contact</span>
                        </NavLink>
                    </div>
                    <div className="navbar-language-box">
                        <select className="language-select">
                            <option value="EN">EN</option>
                            <option value="NO">NO</option>
                            <option value="CN">CN</option>
                            <option value="HN">HN</option>
                        </select>
                    </div>
                    <div className="navbar-links-social">
                        <Link to="https://www.facebook.com/dag.hol.7?fref=ts" target='_blank' className='nav-social-link'>
                            <span className='social-link-title'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </span>
                        </Link>
                        <Link to="https://en.wikipedia.org/wiki/Dag_Hol" className='nav-social-link' target='_blank'>
                            <span className='social-link-title'>
                                <i className="fa-brands fa-wikipedia-w"></i>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="sidebar-toggle-button">
                    <button className="sidebar-btn" onClick={toggleSidebar}>
                        {!sidebarBtnIcon && <i className="fa-solid fa-bars"></i>}
                        {sidebarBtnIcon && <i className="fa-solid fa-xmark"></i>}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
