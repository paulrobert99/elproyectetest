import React from 'react';


function SearchBar() {
    return(
    <form action="/" id='searh-bar'method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search restaurants</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search restaurants"
            name="s" 
        />
        <button type="submit" id='btn'>Search</button>
        <button type="submit" id='btn'>Advanced Search</button>
    </form>
);
}

export default SearchBar;