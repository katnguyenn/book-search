import React from "react";

const SearchBar = (prop) => {
    return (

        <div className="searchbox">
            <span className="searchtitle">Search</span>
            <input
                id="search"
                className="search-control"
                type="search"
                placeholder="name"
                name="searchedBook"
                value={prop.search}
                onChange={prop.handleInputChange}


            />
             <button onClick={prop.handleSubmit}>Search</button>
        </div>
    )
}

export default SearchBar;