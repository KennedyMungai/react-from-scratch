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
                        <div>
                            <span className='fw-bold'>Name: </span>
                            {stockData.name }
                        </div>
                        <div>
                            <span className='fw-bold'>Country: </span>
                            {stockData.country}
                        </div>
                        <div>
                            <span className='fw-bold'>Ticker: </span>
                            {stockData.ticker}
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <span className='fw-bold'>Exchange: </span>
                            {stockData.exchange}
                        </div>
                        <div>
                            <span className='fw-bold'>Industry: </span>
                            {stockData.finnhubIndustry}
                        </div>
                        <div>
                            <span className='fw-bold'>IPO: </span>
                            {stockData.ipo}
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <span className='fw-bold'>Market Cap: </span>
                            {stockData.marketCapitalization}
                        </div>
                        <div>
                            <span className='fw-bold'>Shares Outstanding: </span>
                            {stockData.shareOutstanding}
                        </div>
                        <div>
                            <span className='fw-bold'>URL: </span>
                            <a href={stockData.weburl} target="_blank" rel="noreferrer">{stockData.url}</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default StockData;