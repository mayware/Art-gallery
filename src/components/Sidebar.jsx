import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/sidebar.css';
const Sidebar = ({ toggleSidebar, languageSetup, changeLanguage }) => {

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [navbarBtn, setNavbarBtn] = useState(null);

    useEffect(() => {
        fetch(`https://fakeapi.lyteloli.work/gallery?lang=${languageSetup}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setNavbarBtn(data.nav_menu.buttons);
                setIsPending(false);
            })
            .catch(error => {
                setError(error);
                setIsPending(false);
            });
    }, [languageSetup]);

    return (
        <aside className="sidebar">
            <div className="sidebar-inner">
                {navbarBtn && navbarBtn.map((btn, index) => (
                    <NavLink to={btn.link} className='sidebar-link' onClick={toggleSidebar} key={index}>
                        <span className="nav-link-title">{btn.text}</span>
                    </NavLink>
                ))}
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
                {/* <div className="navbar-language-box">
                    <select className="language-select" value={languageSetup}
                        onChange={(e) => changeLanguage(e.target.value)}>
                        <option value="en">EN</option>
                        <option value="no">NO</option>
                        <option value="zh">ZH</option>
                        <option value="hi">HI</option>
                    </select>
                </div> */}
            </div>
        </aside>
    );
}

export default Sidebar;