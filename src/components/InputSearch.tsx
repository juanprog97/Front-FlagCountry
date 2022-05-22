import React from "react";
import "./InputSearch.scoped.scss";
const InputSearch = () => {
  return (
    <div className="containerInput">
      <input
        id="inputSearchCountry"
        type="text"
        placeholder="Search for country..."
      />
    </div>
  );
};

export default InputSearch;
