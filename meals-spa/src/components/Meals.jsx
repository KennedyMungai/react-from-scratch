import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { BsHandThumbsUp } from 'react-icons/bs';


const Meals = () => {
  const { meals } = useGlobalContext();

  return (
    <section className='section-center'>
      {meals.map((singleMeal) => {
        const {idMeal, strMeal: title, strMealThumb:image} = singleMeal;

        return <article className='singleMeal' key={idMeal}>
          <img src={image} className="img" />
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