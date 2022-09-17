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
                const responses = Promise.all(
                    watchList.map((stock) => {
                        return finnHub.get("/quote", {
                            params: {
                                symbol: stock
                            }
                        })
                    })
                );
                
                if(isMounted)
                {
                    setStock(responses);
                    console.log(responses);
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