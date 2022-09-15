import React, { useContext } from 'react';


const AppContext = React.createContext();

const Context = ({ children }) => {
    
    return <AppContext.Provider value='hello'>
        {children}
    </AppContext.Provider>
}

export default Context;