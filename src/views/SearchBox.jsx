import React, { useState } from "react";
import "./styles.css";

export const SearchBox = ({ onSearch, onClose }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    setSearchText("");
    onClose();
  };
  return (
    <div className="search-box">
      <h2 className="search-box-title">Buscador de Personal</h2>
      <div className="search-box-buttons">
        <label>
          <input
            className="search-box-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </label>
        <button onClick={onSearch}>Buscar</button>
        <button onClick={handleSearchClick}>Cerrar</button>
      </div>
    </div>
  );
};
