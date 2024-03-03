import React, { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search for recipes..."
          className="w-full px-4 py-2 mb-7 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 ml-2 mb-7 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
