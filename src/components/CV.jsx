import '../styles/cv.css';
import { useEffect } from 'react';
const CV = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="cv-content">
                <h1>CV page</h1>
            </div>
        </div>
    );
}

export default CV;