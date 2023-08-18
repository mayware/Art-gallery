import { useState, useEffect } from 'react';

const useFetch = (url, limit = null, filtered) => {
    const [navbarBtn, setNavbarBtn] = useState(null);
    const [totalImages, setTotalImages] = useState(0);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [galleryData, setGalleryData] = useState(null);
    const [categoryImages, setCategoryImages] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                let categorizedImages = data.images;
                if (filtered !== 'All') {
                    categorizedImages = categorizedImages.filter(image =>
                        image.category.includes(filtered)
                    );
                }
                setNavbarBtn(data.nav_menu.buttons);
                // setAboutData(data);
                setCategoryImages(data.images);
                setGalleryData(limit ? categorizedImages.slice(0, limit) : data);
                setTotalImages(categorizedImages.length);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error);
                setIsPending(false);
            });
        return () => abortCont.abort();
    }, [url, limit, filtered]);

    return { categoryImages, galleryData, navbarBtn, totalImages, isPending, error };
};

export default useFetch;
