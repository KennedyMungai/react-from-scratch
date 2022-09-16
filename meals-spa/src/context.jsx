import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';


const AppContext = React.createContext();
const allMealsUrl = 'www.themealdb.com/api/json/v1/1/search.php?f=a';
const randomMealUrl = 'www.themealdb.com/api/json/v1/1/random.php';


const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([]);

    const fetchMeals= async (url) => {
        try {
            const {data} = await axios(url);
            setMeals(data.meals);
            console.log(data);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        fetchMeals(allMealsUrl);
    }, []);
    
    
    return <AppContext.Provider value={{name: 'john', role: 'student'}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }