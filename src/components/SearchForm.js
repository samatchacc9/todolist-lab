import { useState } from "react";

function SearchForm(props) {
  //state
  const [searchTerm, setSearchTerm] = useState("");

  //click clear
  const handleClickClear = () => {
    setSearchTerm("");
    props.clearSearch();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={() => props.searchTodo(searchTerm)}>Search</button>
      <button onClick={handleClickClear}>Clear</button>
    </div>
  );
}

export default SearchForm;
