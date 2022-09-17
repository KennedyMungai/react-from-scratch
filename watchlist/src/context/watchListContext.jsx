import React, { createContext } from 'react';


export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
    return (
        <WatchListContext.Provider></WatchListContext.Provider>
    )
}

export default WatchListContextProvider;