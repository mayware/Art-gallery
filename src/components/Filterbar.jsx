import React, { useState } from 'react';
import '../styles/filterbar.css';

const Filterbar = ({ activeButton, changeFilter }) => {

    const handleButtonClick = (buttonName) => {
        changeFilter(buttonName);
    };

    return (
        <div className='filter-bar'>
            <div className="filter-buttons">
                <button
                    className={`filter-btn ${activeButton === 'All' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('All')}
                    id="left-filter-btn"
                >
                    All
                </button>
                <button
                    className={`filter-btn ${activeButton === 'Oil paintings' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Oil paintings')}
                >
                    Oil Paintings
                </button>
                <button
                    className={`filter-btn ${activeButton === 'Lithographs' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Lithographs')}
                >
                    Lithographs
                </button>
                <button
                    className={`filter-btn ${activeButton === 'NFTS' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('NFTS')}
                    id="right-filter-btn"
                >
                    NFTS
                </button>
            </div>
        </div>
    );
};

export default Filterbar;
