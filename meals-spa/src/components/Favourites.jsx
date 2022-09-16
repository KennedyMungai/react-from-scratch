import React from 'react';
import { useGlobalContext } from '../context';


const Favourites = () => {
  const { favourites } = useGlobalContext();

  return (
    <div>Favourites</div>
  )
}

export default Favourites;