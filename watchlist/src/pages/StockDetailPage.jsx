import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const StockDetailPage = () => {
  const { symbol } = useParams();

  useEffect(() => {
    const fetchData = async () => {

    }
  }, [])
  

  return (
    <div>StockDetailPage</div>
  )
}

export default StockDetailPage;