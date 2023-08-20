import { useState, useEffect } from 'react';

const useFetch = (url, limit = null, filtered) => {
    const [totalImages, setTotalImages] = useState(0);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [galleryData, setGalleryData] = useState(null);


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

    return { galleryData, totalImages, isPending, error };
};

export default useFetch;
