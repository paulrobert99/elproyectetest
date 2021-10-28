import React from 'react';


function SearchBar() {
    return(
        <form action="/" id='searh-bar' method="get">
            <br />
        <label htmlFor="header-search">
            <span className="visually-hidden">Search restaurants</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search restaurants"
            name="s" 
        />
        <div class="container">
            <div class="center">
                <button type="submit" id='btn'>Search</button>
                <button type="submit" id='btn'>Advanced Search</button>
            </div>
        </div>
        <br /><br /><br /><br /><br />

    </form>
);
}

export default SearchBar;