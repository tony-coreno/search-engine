import React, { useState } from "react";
import { SearchBox } from "./views/SearchBox";
import './styles-general.css'
const App = () => {

  const [isAtTop, setIsAtTop] = useState(false);

  const handleSearchOpenClick = () => {setIsAtTop(!isAtTop)};

  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`} >
      <SearchBox onSearch={handleSearchOpenClick} onClose={handleSearchOpenClick} />
    </div>
  );
};

export default App;
