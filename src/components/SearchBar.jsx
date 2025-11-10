import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  }
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Tasks..."
        className="search-input"
        onChange={handleChange}
      />
    </div>
  );
}
