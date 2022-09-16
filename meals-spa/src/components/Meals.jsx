import React, { useState } from 'react';
import { useGlobalContext } from '../context';


const Meals = () => {
  const { meals } = useGlobalContext();

  return (
    <section className='section-center'>
      {meals.map((singleMeal) => {
        const {idMeal, strMeal: title, strMealThumb:image} = singleMeal;

        return <article className='singleMeal' key={idMeal}>
          <img src={image} className="img" style={{width: '200px'}} />
          <footer>
            <h5>{title}</h5>
            <button className='like-btn'>Click Me</button>
          </footer>
        </article>
      })}
    </section>
  )
}

export default Meals;