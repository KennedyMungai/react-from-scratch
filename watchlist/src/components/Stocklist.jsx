import React, {useState, useEffect} from 'react';
import finnHub from '../apis/finnHub';


const Stocklist = () => {
    const [watchList, setWatchList] = useState([
        "GOOGL", "MSFT", "AMZN"
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/quote?symbol=MSFT&token=cci686aad3ibcn4bhn2g");
                console.log(response);
            } catch (err) {
                
            }

            fetchData();
        }
    }, []);
    

  return (
    <div>Stocklist</div>
  )
}

export default Stocklist;