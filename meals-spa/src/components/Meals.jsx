import React from 'react';
import { useGlobalContext } from '../context';


const Meals = () => {
  const context = useContext(AppContext);
  console.log(context);

  return (
    <div>Meals</div>
  )
}

export default Meals;