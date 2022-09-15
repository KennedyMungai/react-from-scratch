import React, { useContext } from 'react';


const AppProvider = React.createContext();

const Context = ({ children }) => {
    
    return <AppContext.Provider value='hello'>
        {children}
    </AppContext.Provider>
}

export { AppContext, AppProvider }