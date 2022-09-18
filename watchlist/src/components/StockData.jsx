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
            {stockData && (
                <div className='row border bg-white rounded shadow-sm  p-4 mt-5'>
                    <div className='col'>
                        <span className='fw-bold'>Name: </span>
                        <span className='fw-bold'>Country: </span>
                        <span className='fw-bold'>Ticker: </span>
                    </div>
                    <div className='col'>
                        <span className='fw-bold'>Exchange: </span>
                        <span className='fw-bold'>Industry: </span>
                        <span className='fw-bold'>IPO: </span>
                    </div>
                    <div className='col'>
                        <span className='fw-bold'>Market Cap: </span>
                        <span className='fw-bold'>Shares Outstanding: </span>
                        <span className='fw-bold'>URL: </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default StockData;