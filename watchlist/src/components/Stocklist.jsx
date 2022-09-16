import React, {useState, useEffect} from 'react';
import finnHub from '../apis/finnHub';


const Stocklist = () => {
    const [watchList, setWatchList] = useState([
        "GOOGL", "MSFT", "AMZN"
    ]);
    const [stock, setStock] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/quote", {
                    params: {
                        symbol: "MSFT"
                    }
                });
                console.log(response);
            } catch (err) {
                console.log(err.message);
            }
        }

        fetchData();
    }, []);
    

  return (
    <div>Stocklist</div>
  )
}

export default Stocklist;