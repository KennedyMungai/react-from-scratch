import React, { useState, useEffect } from 'react';
import finnHub from '../apis/finnHub';


const Autocomplete = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const renderDropdown = () => {
    const dropDownClass = search ? "show": null;

    return (
          <ul 
              className={`dropdown-menu ${dropDownClass}`}
              style={{
                height: "500px",
                overflowY: "scroll",
                overflowX: "hidden",
                cursor: "pointer"
              }}
              >
            {results.map((result) => {
              return (
                <li className='dropdown-item'>{result.description} {result.symbol}</li>
              )
            })}
          </ul> 
    )
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/search", {
          params: {
            q: search
          }
        })
        
          if(isMounted){
            setResults(response.data.results);
          }
      } catch (err) {
        console.log(err);
      }
    }

    if(search.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }

    return () => (isMounted = false);
  }, [search]);
  

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              ></input>
          <label htmlFor='search'>Search</label>
          {renderDropdown()}
      </div>
    </div>
  )
}

export default Autocomplete;