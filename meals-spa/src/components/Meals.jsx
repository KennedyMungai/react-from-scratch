import React, { useState } from 'react';
import { useGlobalContext } from '../context';


const Meals = () => {
  const { meals } = useGlobalContext();

  return (
    <div>Meals</div>
  )
}

export default Meals;