import React, {useState, useEffect} from 'react';
import finnHub from '../apis/finnHub';


const Stocklist = () => {
    const [watchList, setWatchList] = useState([
        "GOOGL", "MSFT", "AMZN"
    ]);



  return (
    <div>Stocklist</div>
  )
}

export default Stocklist;