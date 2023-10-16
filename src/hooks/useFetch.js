import React, { useState } from 'react'
import { useEffect } from 'react'
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("something was wrong");
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                console.log(data);
                setError(null);
                setLoading(false)

            }).catch(e => { setError(e.message); })
    }, [url])

    return { data, loading, error }
}
