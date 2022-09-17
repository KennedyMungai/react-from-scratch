import React, {useState, useEffect} from 'react';
import finnHub from '../apis/finnHub';


const Stocklist = () => {
    const [stock, setStock] = useState([]);
    const [watchList, setWatchList] = useState([
        "GOOGL", "MSFT", "AMZN"
    ]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    watchList.map((stock) => {
                        return finnHub.get("/quote", {
                            params: {
                                symbol: stock
                            }
                        })
                    })
                );

                const data = responses.map((response) => {
                    return {
                        data: response.data,
                        symbol: response.config.params.symbol
                    }
                });
                
                console.log(data);

                if(isMounted)
                {
                    setStock(data);
                }
            } catch (err) {
                console.log(err.message);
            }
        }

        fetchData();

        return () => (isMounted = false);
    }, []);
    

    return (
        <div className="table-responsive">
            <table className="table 
            mt-5
            table-striped
            table-bordered
            table-hover	
            table-borderless
            table-primary
            align-middle">
                <thead className="table-light">
                    <caption>Stock List</caption>
                    <tr>
                        <th>Name</th>
                        <th>Last</th>
                        <th>Chg</th>
                        <th>Chg%</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Open</th>
                        <th>Close</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            stock.map((stockData) => {
                                return (
                                    <tr className="table-primary" key={stockData.symbol} >
                                        <th scope='row'>{stockData.symbol}</th>
                                        <td className={`text-${changeColor}`}>{stockData.data.c}</td>
                                        <td className={`text-${changeColor}`}>{stockData.data.d}</td>
                                        <td>{stockData.data.dp}</td>
                                        <td>{stockData.data.h}</td>
                                        <td>{stockData.data.l}</td>
                                        <td>{stockData.data.o}</td>
                                        <td>{stockData.data.pc}</td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                    <tfoot>
                        
                    </tfoot>
            </table>
        </div>
    )
}

export default Stocklist;   