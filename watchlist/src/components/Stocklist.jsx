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
            const responses = [];
            
            try {
                const response1 = await finnHub.get("/quote", {
                    params: {
                        symbol: "MSFT"
                    }
                });
                responses.push(response1);

                const response2 = await finnHub.get("/quote", {
                    params: {
                        symbol: "GOOGL"
                    }
                });
                responses.push(response2);

                const response3 = await finnHub.get("/quote", {
                    params: {
                        symbol: "AMZN"
                    }
                });
                responses.push(response3);

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