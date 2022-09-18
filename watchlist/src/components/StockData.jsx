import React, { useEffect, useState } from 'react';
import finnHub from '../apis/finnHub';


const StockData = ({ symbol }) => {
    let isMounted = true;
    const [stockData, setStockData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/stock/profile2", {
                    params: {
                        symbol
                    }
                });
                console.log(response);
                if (isMounted) {
                    setStockData(response.data);
                }

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

        return () => (isMounted = false);
    }, [symbol])
    

    return (
        <div>

        </div>
    )
}

export default StockData;