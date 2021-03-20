import React, {useState} from "react";
import SearchBar from "../components/SearchBar";
import Wrapper from "../components/Wrapper";

const Home = () => {
    const [dataSearch, setDataSearch] = useState({
        books: [],
        searchedBook: "",
        savedBooks: [],

    });


const handleSearchChange = event => {
    const { name, value } = event.target;
       setDataSearch({
           ...dataSearch,
           [name]: value
       })
       console.log(value)
}


return (
    <Wrapper>
        <SearchBar handleInputChange={handleSearchChange} />
      
      
    </Wrapper>
)

}

export default Home;