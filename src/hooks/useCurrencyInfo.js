import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch currency data');
                }
                const result = await response.json();
                setData(result[currency] || {});
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error("Error fetching currency data:", err);
                setData({});
            }
        };

        fetchData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;