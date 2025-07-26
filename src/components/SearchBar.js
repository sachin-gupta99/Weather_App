import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ city, setCity, handleKeyPress, handleSearch, loading }) => (
  <div className="search-container">
    <input
      type="text"
      className="search-input"
      placeholder="Enter city name..."
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyPress={handleKeyPress}
    />
    <button className="search-button" onClick={handleSearch} disabled={loading}>
      <FiSearch size={24} />
    </button>
  </div>
);

export default SearchBar; 