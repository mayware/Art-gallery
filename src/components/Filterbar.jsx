import React, { useEffect } from 'react';
import '../styles/filterbar.css';

const Filterbar = ({ activeButton, changeFilter, galleryAttribute }) => {

    const handleButtonClick = (buttonName) => {
        changeFilter(buttonName);
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
                    >
                        {filterBtn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filterbar;
