import React, { createContext, useContext } from 'react';


export const WatchListContext = createContext();

const watchListContext = () => {
    return (
        <div>watchListContext</div>
    )
}

export default watchListContext;