import React from 'react';
import { useGlobalContext } from '../context';



const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const { strMealThumb:image, strMeal: title, strInstructions:text, strSource:source } = selectedMeal;

  return (
    <aside className='modal-overlay'>
      <div className="modal-container">
        <h1>{selectedMeal.strMeal}</h1>
        <button onClick={closeModal}>close</button>
      </div>
    </aside>
  )
}

export default Modal;