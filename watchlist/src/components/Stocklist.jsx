import React, {useState, useEffect, useContext} from 'react';
import finnHub from '../apis/finnHub';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { WatchListContextProvider } from '../context/watchListContext';
import { useNavigate } from 'react-router-dom';


const Stocklist = () => {
    const [stock, setStock] = useState([]);
    const { watchList } = useContext(WatchListContextProvider);
    const navigate = useNavigate();

    const changeColor = (change) => {
        return change > 0 ? "success" : "danger";
    };

    const renderIcon = (change) => {
        return change > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />
    };

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
    }, [watchList]);
    
    const handleStockSelect = (symbol) => {
        navigate(`detail/${symbol}`);
    };

    return (
        <div className="table-responsive">
            <table className="
            table
            mt-5
            table-borderles
            table-hover	
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
                                    <tr 
                                        className="table-row" 
                                        key={stockData.symbol} 
                                        onClick={() => handleStockSelect(stockData.symbol)} 
                                        style={{cursor: "pointer"}}
                                        >
                                            <th scope='row'>{stockData.symbol}</th>
                                            <td>{stockData.data.c}</td>
                                            <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.d} {renderIcon(stockData.data.dp)}</td>
                                            <td className={`text-${changeColor(stockData.data.dp)}`}>{stockData.data.dp} {renderIcon(stockData.data.dp)} </td>
                                            <td>{stockData.data.h}</td>
                                            <td>{stockData.data.l}</td>
                                            <td>{stockData.data.o}</td>
                                            <td>{stockData.data.pc} <button className='btn btn-danger btn-sm ml-3 d-inline-block delete-button'>Remove</button></td>
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