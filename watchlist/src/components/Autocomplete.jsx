import React, { useState } from 'react';


const Autocomplete = () => {
  return (
    <div className='w-50 p-5 rounded mx-auto'>
      <div className='form-floating dropdown'>
        <input 
              style={{backgroundColor: "rgba(145, 158, 171, .04)"}} 
              id="search" 
              placeholder="Search" 
              type="text" 
              className="form-control"
              autoComplete='off'
              ></input>
          <label htmlFor='search'>Search</label>
          <ul className='dropdown-menu show'>
            <li>stock1</li>
            <li>stock2</li>
            <li>stock3</li>
          </ul>
      </div>
    </div>
  )
}

export default Autocomplete;