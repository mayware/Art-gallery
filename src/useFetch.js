import { useState, useEffect } from 'react';

const useFetch = (url, limit = null) => {
    const [data, setData] = useState(null);
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
                // setData(limit ? data.slice(0, limit) : data);
                setTotalImages(data.length);
                setGalleryData(limit ? data.images.slice(0, limit) : data)
                setTotalImages(data.images.length);
                setIsPending(false);
                setError(null);
                console.log(galleryData);
            })
            .catch(error => {
                setError(error);
                setIsPending(false);
            });
        return () => abortCont.abort();
    }, [url, limit]);

    return { galleryData, data, totalImages, isPending, error };
};

export default useFetch;
