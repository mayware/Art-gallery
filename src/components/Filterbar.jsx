import React, { useState, useEffect } from 'react';
import '../styles/filterbar.css';

const Filterbar = () => {
    const [activeButton, setActiveButton] = useState('All');
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const toggleStickyFilterBar = () => {
            const filterBar = document.getElementById('sticky-filter-bar');
            const stickyOffset = filterBar.offsetTop;
            setIsSticky(window.pageYOffset >= stickyOffset);
        };

        window.addEventListener('scroll', toggleStickyFilterBar);
        return () => {
            window.removeEventListener('scroll', toggleStickyFilterBar);
        };
    }, []);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className={`filter-bar ${isSticky ? 'sticky' : ''}`}
            id="sticky-filter-bar">
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
                    Oil paintings
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
