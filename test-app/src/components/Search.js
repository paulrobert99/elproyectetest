import React from 'react';


function SearchBar() {
    return(
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search restaurants</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search restaurants"
            name="s" 
        />
        <button type="submit">Search</button>
        <button type="submit">Advanced Search</button>
    </form>
);
}

export default SearchBar;