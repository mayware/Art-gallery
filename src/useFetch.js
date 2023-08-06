import { useState, useEffect } from 'react';

const useFetch = (url, limit = null) => {
    const [data, setData] = useState(null);
    const [totalImages, setTotalImages] = useState(0);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

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
                setData(limit ? data.images.slice(0, limit) : data);
                setTotalImages(data.images.length);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error);
                setIsPending(false);
            });
        return () => abortCont.abort();
    }, [url, limit]);

    return { data, totalImages, isPending, error };
};

export default useFetch;
