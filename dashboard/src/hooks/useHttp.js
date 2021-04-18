import { useCallback, useState } from "react"

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback( async(url, method = "GET", body = null, headers = {}, credentials='include') => {
        setLoading(true);
        try {
            if(body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, { method, body, headers, credentials });
            const data = await response.json();
            const status = await response.status;
            if(!response.ok) {
                throw new Error(data.message || "Something went wrong!")
            }
            setLoading(false);
            return {data, status};
        } catch (error) {
            setLoading(false);
            setError(error.message)
            throw(error);
        }
    }, [])

    return {loading, request, error}
}