import React from 'react';


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
      </div>
    </div>
  )
}

export default Autocomplete;