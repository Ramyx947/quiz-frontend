import React from 'react'


const Search = (props) =>
<div className="ui huge fluid icon input">
    <input
      type="text"
      placeholder={"Search for a quiz"}
      onChange={(event) => props.updateSearch(event.target.value)}
    />
    <i className="circular search link icon"></i>
  </div>


export default Search
