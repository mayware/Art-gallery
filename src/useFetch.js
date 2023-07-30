import { useState, useEffect } from "react";
const useFetch = (url, limit = null) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data from the resource')
                }
                return res.json()
            })
            .then(data => {
                setData(limit ? data.slice(0, limit) : data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        return () => abortCont.abort();
    }, [url, limit]);

    return (
        { data, isPending, error }
    );
}

export default useFetch;