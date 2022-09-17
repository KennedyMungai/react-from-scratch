import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import finnHub from '../apis/finnHub';


const StockDetailPage = () => {
  const { symbol } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const date = new Date();
      const currentTime = Math.floor(date.getTime() / 1000);

      const response = await finnHub.get("/stock/candle", {
        params: {
          symbol, 
          from,
          to,
          resolution
        }
      })
    }
  }, [])
  

  return (
    <div>StockDetailPage</div>
  )
}

export default StockDetailPage;