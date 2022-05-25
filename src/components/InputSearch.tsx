import React from "react";
import "./InputSearch.scoped.scss";
const InputSearch = (props: any) => {
  const HandleOnChange = (event: any) => {
    props.searchNameFlag(event.target.value);
  };
  return (
    <div className="containerInput">
      <input
        id="inputSearchCountry"
        type="text"
        placeholder="Search for country..."
        onChange={HandleOnChange}
        role="search-flag-name"
      />
    </div>
  );
};

export default InputSearch;
