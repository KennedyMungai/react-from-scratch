import React, { useEffect, useState } from 'react';
import finnHub from '../apis/finnHub';


const StockData = ({ symbol }) => {
    let isMounted = true;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/stock/profile2", {
                    params: {
                        symbol
                    }
                });
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }, [symbol])
    

    return (
        <div>StockData</div>
    )
}

export default StockData;