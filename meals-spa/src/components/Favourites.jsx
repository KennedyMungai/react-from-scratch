import React from 'react';
import { useGlobalContext } from '../context';


const Favourites = () => {
  const { favourites, selectMeal, removeFromFavourites } = useGlobalContext();

  return (
    <div>Favourites</div>
  )
}

export default Favourites;