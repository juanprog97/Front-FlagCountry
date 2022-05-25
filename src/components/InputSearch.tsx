import { useState } from "react";
import "./InputSearch.scoped.scss";
const InputSearch = (props: any) => {
  const [textValue, setTextValue] = useState("");
  const HandleOnChange = (event: any) => {
    setTextValue(event.target.value);
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
        value={textValue}
      />
    </div>
  );
};

export default InputSearch;
