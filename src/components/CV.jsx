import '../styles/cv.css';
import { useEffect } from 'react';
const CV = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="cv-content">
                <div className="cv-box">
                    <div className="cv-preview">
                        <div className="cv-preview-inner">
                            <div className="cv-host-name">
                                <span className='cv-host-name-text'>
                                    Daghol
                                </span>
                            </div>
                            <div className="cv-host-description">
                                <div className="cv-desc-summary">
                                    <div className="cv-desc-title">
                                        <span className="cv-desc-title-text">
                                            Born October 26., 1951
                                        </span>
                                    </div>
                                    <div className="cv-desc-summary-body">
                                        <span className="cv-desc-body-text">
                                            Studied Nordic, French and German literature and language at the University of Oslo.
                                            Studied art at the State Academy of Art in Oslo, Norway, from 1980 to 1984.
                                            Private studies of the European masters from 1400 to 1900.
                                            Studies of American, Chinese, Japanese and Indian art.
                                        </span>
                                    </div>
                                </div>
                                <div className="cv-desc-main">
                                    <div className="cv-desc-title">
                                        <span className="cv-desc-title-text">
                                            Solo exhibitions:
                                        </span>
                                    </div>
                                    <div className="cv-desc-body">
                                        <ul className="cv-desc-body-info-list">
                                            <li className="cv-desc-list-item">
                                                Noho Gallery, New York, 2012 Oslo City Hall, 2012, 3000 visitors came for the opening, totally 21000 came during the 3 weeks.
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Galleri 27, Oslo, 2006, Finished largest landscape painting in Norway (212 x 460 cm).
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Galleri 27, Oslo, 2005
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Galleri 27, Oslo, 2004
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Addington Gallery, Chicago, 2004
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Thrivent, Minneapolis, USA, 2003
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Galleri 27, Oslo, 2003.
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Oslo City Hall, ”Norway”, 2002.
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Galleri 27, Oslo, 2001.
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Greenwood Gallery, New Delhi, India, 2000.
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Noho Gallery, New York, 1997.
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Saks galleries, Denver and Colorado Springs, 1990.
                                            </li>
                                            <li className="cv-desc-list-item">
                                                In several Norwegian cities from 1987 to 2012.
                                            </li>
                                            <li className="cv-desc-list-item">
                                                Artists Association, (Kunstnerforbundet), Oslo, 1986.
                                            </li>
                                            <li className="cv-desc-list-item">
                                                First solo exhibition in Galleri Bellman, Oslo, 1983.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cv-desc-additional">
                                    <div className="cv-desc-title">
                                        <span className="cv-desc-title-text">
                                            Group exhibitions:
                                        </span>
                                    </div>
                                    <ul className="cv-desc-body-info-list">
                                        <li className="cv-desc-list-item">
                                            Medici Gallery, London, 2010
                                        </li>
                                        <li className="cv-desc-list-item">
                                            Gallery Biba, Palm Beach, Florida, USA, 2007
                                        </li>
                                        <li className="cv-desc-list-item">
                                            Addington Gallery, Chicago, USA, 1999.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CV;