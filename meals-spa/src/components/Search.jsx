import React, { useState } from 'react';
import { useGlobalContext } from '../context';


const Search = () => {
  const [text, setText] = useState('');

  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.PreventDefault();

    if(text) {
      setSearchTerm(text);
    }
  }

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search Favourite Meal' className='form-input' value={text} onChange={handleChange} />
        <button type="submit" className='btn'>Search</button>
        <button type="button" className='btn btn-hipster' onClick={fetchRandomMeal}>Surprise Me!</button>
      </form>
    </header>
  )
}

export default Search;