import React from 'react';
import Logo from "./Logo.js";


function SearchBar() {
  return (
    <div className="SearchBar">
     
     <Logo/>
     <input 
     type="text" 
     value ="Search">
     </input>

    </div>
  );
}

export default SearchBar;
