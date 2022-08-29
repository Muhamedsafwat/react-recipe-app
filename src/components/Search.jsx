import { FaSearch } from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/header.css";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <FaSearch />
      <input
        placeholder="What are you looking for ?"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
