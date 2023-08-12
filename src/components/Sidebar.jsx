import { NavLink, Link } from 'react-router-dom';
import '../styles/sidebar.css';
const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-inner">
                <NavLink to="/" className='sidebar-link'>
                    <span className="nav-link-title">Home</span>
                </NavLink>
                <NavLink to={"/gallery"} className='sidebar-link'>
                    <span className="nav-link-title">Gallery</span>
                </NavLink>
                <NavLink to="/about" className='sidebar-link'>
                    <span className="nav-link-title">About</span>
                </NavLink>
                <NavLink to="/cv" className='sidebar-link'>
                    <span className="nav-link-title">CV</span>
                </NavLink>
                <NavLink to="/contact" className='sidebar-link'>
                    <span className="nav-link-title">Contact</span>
                </NavLink>
                <div className="sidebar-social-links">
                    <div className="sidebar-social-links">
                        <Link to="https://en.wikipedia.org/wiki/Dag_Hol" className='nav-link' target='_blank'>
                            <span className='social-link-title'>
                                <i className="fa-brands fa-wikipedia-w"></i>
                            </span>
                        </Link>
                        <Link to="https://www.facebook.com/dag.hol.7?fref=ts" target='_blank' className='nav-link'>
                            <span className='social-link-title'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;