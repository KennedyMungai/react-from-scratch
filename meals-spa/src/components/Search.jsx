import React, { useState } from 'react';
import { useGlobalContext } from '../context';


const Search = () => {
  return (
    <header className='search-container'>
      <form>
        <input type='text' placeholder='Search Favourite Meal' className='form-input' />
      </form>
    </header>
  )
}

export default Search;