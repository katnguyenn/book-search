import React from "react";
import "../styles/SearchBar.css";

const SearchBar = (prop) => {
    return (

        <div className="searchbox">
            <span className="searchtitle"></span>
            <input
                id="search"
                className="search-control"
                type="search"
                placeholder="name"
                name="searchedBook"
                value={prop.search}
                onChange={prop.handleInputChange}
                onKeyPress={prop.handleKeyPress}


            />
             <button onClick={prop.handleSubmit}>Search</button>
        </div>
    )
}

export default SearchBar;