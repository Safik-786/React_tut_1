                                                  // NOTES: 
// => The useSearchParams hook in React is used to access and update the query parameters in the URL
//   for the current location.
// => It returns an object containing the key - value pairs of the query parameters, 
// and a function that can be used to update the query parameters.




import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {

  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = (e) => {
    e.preventDefault();
    const data = searchParams.get('q')
    const age = searchParams.get('age')
    alert(data + "  " + age);   
  }

  return (
    <div style={{ textAlign: "center", height: "200px", border: "2px solid black" }}>
      <h3>This is a search Page</h3>
      <button onClick={() => setSearchParams({ q: "Rahul" })}> Rahul</button>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search</label><br />
        <input type="text" id="search" placeholder='QueryParams' onChange={(e) => setSearchParams({ q: e.target.value })} />
       &nbsp;  &nbsp;
        <input type="submit" value='Search' />
        &nbsp;  &nbsp;
        <input type="submit" value='Reset' onClick={() => setSearchParams({})} />


      </form>
    </div>
  )
}

export default Search
