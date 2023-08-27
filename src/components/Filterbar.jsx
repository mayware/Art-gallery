import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/filterbar.css';

const Filterbar = ({ activeButton, changeFilter, galleryAttribute }) => {
    const navigate = useNavigate();

    const handleButtonClick = (buttonName) => {
        changeFilter(buttonName);
        const newPath = `/gallery/${buttonName}`;
        navigate(newPath);
    };


    useEffect(() => {
        localStorage.setItem('activeButton', activeButton);
    }, [activeButton]);

    return (
        <div className='filter-bar'>
            <div className="filter-buttons">
                {galleryAttribute.categories.map((filterBtn) => (
                    <button
                        className={`filter-btn ${activeButton === filterBtn ? 'active' : ''}`}
                        onClick={() => handleButtonClick(filterBtn)}
                        id="left-filter-btn"
                        key={filterBtn}
                    >
                        {filterBtn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filterbar;
