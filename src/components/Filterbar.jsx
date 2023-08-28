import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/filterbar.css';

const Filterbar = ({ activeButton, changeFilter, galleryAttribute }) => {
    const navigate = useNavigate();
    const [defaultActiveButton, setDefaultActiveButton] = useState(galleryAttribute.categories[0]);

    const handleButtonClick = (buttonName) => {
        changeFilter(buttonName);
        const newPath = `/gallery?category=${buttonName}`;
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
                        className={`filter-btn ${defaultActiveButton === filterBtn ? 'active' : ''}`}
                        onClick={() => {
                            handleButtonClick(filterBtn);
                            setDefaultActiveButton(filterBtn);
                        }}
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
