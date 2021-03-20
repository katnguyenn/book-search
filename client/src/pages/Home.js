import React, {useState} from "react";
import SearchBar from "../components/SearchBar";
import Wrapper from "../components/Wrapper";
import BookCard from "../components/BookCard";
import API from "../utils/API";
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
const handleSubmit = event => {
    API.getBook(dataSearch.searchedBook)
    .then(response => {
        setDataSearch({
            ...dataSearch,
            books: response.data.items
        })
    })
}

return (
    <Wrapper>
        <SearchBar handleSubmit={handleSubmit} handleInputChange={handleSearchChange} search={dataSearch.searchedBook} />
      {console.log(dataSearch.books)}
      {dataSearch.books.length > 0 ? dataSearch.books.map(book => {
          return (
            <BookCard book={book} />
          )
      }) : ""}
      
    </Wrapper>
)

}

export default Home;