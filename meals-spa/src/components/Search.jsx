import React, { useState } from 'react';
import { useGlobalContext } from '../context';


const Search = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.PreventDefault();
  }

  return (
    <header className='search-container'>
      <form>
        <input type='text' placeholder='Search Favourite Meal' className='form-input' />
        <button type="submit" className='btn'>Search</button>
        <button type="button" className='btn btn-hipster'>Surprise Me!</button>
      </form>
    </header>
  )
}

export default Search;