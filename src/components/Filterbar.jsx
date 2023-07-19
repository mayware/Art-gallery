import '../styles/filterbar.css';

const Filterbar = () => {
    return (
        <div className="filter-bar">
            <div className="filter-buttons">
                <button className="filter-btn" id='left-filter-btn'>All</button>
                <button className="filter-btn">Oil paintings</button>
                <button className="filter-btn">Lithographs</button>
                <button className="filter-btn" id='right-filter-btn'>NFTS</button>
            </div>
        </div>
    );
}

export default Filterbar;