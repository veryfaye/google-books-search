import React, { useState } from "react";
import SearchCard from "../Components/SearchCard";
import API from "../utils/API";
// require("dotenv").config();

function Search() {
  const [formObj, setFormObj] = useState([]);

  const API_KEY = process.env.REACT_APP_BOOKS_API_KEY
  console.log(API_KEY)

  function handleInputChange(e) {
    const { name, value } = e.target;

    let newValue = value.trim().split(" ").join("+").toLowerCase();
    console.log(newValue);

    setFormObj({ ...formObj, [name]: newValue });
  }

  function handleFormSubmit(e){
    e.preventDefault();
    console.log("Search clicked")

    let url = `https://www.googleapis.com/books/v1/volumes?q=${formObj.search}&key=${API_KEY}`

    API.findBooks(url).then(res=>console.log(res.data))
  }

  return (
    <div>
      <SearchCard name="search" id="search" onChange={handleInputChange} onClick={handleFormSubmit} />
      <p>SEARCH PAGE</p>
    </div>
  );
}

export default Search;
