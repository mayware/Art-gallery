import '../styles/gallery.css';
import { useState } from 'react';
import useFetch from '../useFetch';
import GalleryImages from './GalleryImages';

const Gallery = () => {
    const { data: images, error, pending } = useFetch('https://api.npoint.io/7873dbcb044096724539');
    return (
        <div className="content">
            <div className="gallery-content">
                <div className="main-gallery">
                    <div className="gallery-slide-banner">

                    </div>
                    <div className="gallery-set">
                        <GalleryImages images={images} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;