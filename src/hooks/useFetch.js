import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
export const useFetch = (url,_name) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // should collect with useState from other form 's object or array and so.
    const name = useRef(_name).current;
    useEffect(() => {
        console.log(name.name);
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
        // primitive data type
        // not use reference data type
    }, [url])

    return { data, loading, error }
}



