import '../styles/galleryfilter.css';
import { useState } from 'react';

const GalleryFilter = () => {
    const [activeButton, setActiveButton] = useState('All');
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="gallery-filter">
            <div className="gallery-filter-buttons">
                <button
                    className={`gallery-filter-btn ${activeButton === 'All' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('All')}
                    id="gallery-left-filter-btn"
                >
                    All
                </button>
                <button
                    className={`gallery-filter-btn ${activeButton === 'Oil paintings' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Oil paintings')}
                >
                    Oil paintings
                </button>
                <button
                    className={`gallery-filter-btn ${activeButton === 'Lithographs' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Lithographs')}
                >
                    Lithographs
                </button>
                <button
                    className={`gallery-filter-btn ${activeButton === 'NFTS' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('NFTS')}
                    id="gallery-right-filter-btn"
                >
                    NFTS
                </button>
            </div>
        </div>
    );
}

export default GalleryFilter;