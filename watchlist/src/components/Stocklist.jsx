import React, {useState, useEffect} from 'react';
import finnHub from '../apis/finnHub';


const Stocklist = () => {
    const [watchList, setWatchList] = useState([
        "GOOGL", "MSFT", "AMZN"
    ]);
    const [stock, setStock] = useState();

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await finnHub.get("/quote", {
                    params: {
                        symbol: "MSFT"
                    }
                });
                console.log(response);

                if(isMounted)
                {
                    setStock(response.data);
                }
            } catch (err) {
                console.log(err.message);
            }
        }

        fetchData();

        return () => (isMounted = false);
    }, []);
    

  return (
    <div>Stocklist</div>
  )
}

export default Stocklist;