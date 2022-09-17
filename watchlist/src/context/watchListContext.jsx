import React, { createContext, useState } from 'react';


export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

    const addStock = (stock) => {
        if(watchList.indexOf(stock) === -1) {
            setWatchList([...watchList, stock]);
        }
    };

    return (
        <WatchListContext.Provider value={{watchList}}>
            {props.children}
        </WatchListContext.Provider>
    )
}