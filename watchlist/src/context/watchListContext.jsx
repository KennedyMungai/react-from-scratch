import React, { createContext, useState } from 'react';


export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

    return (
        <WatchListContext.Provider></WatchListContext.Provider>
    )
}

export default WatchListContextProvider;