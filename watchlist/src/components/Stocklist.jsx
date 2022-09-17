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
                const promises = Promise.all(
                    finnHub.get("/quote", {
                        params: {
                            symbol: "MSFT"
                        }
                    }),
                    finnHub.get("/quote", {
                        params: {
                            symbol: "GOOGL"
                        }
                    }),
                    finnHub.get("/quote", {
                        params: {
                            symbol: "AMZN"
                        }
                    }
                ));
                
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