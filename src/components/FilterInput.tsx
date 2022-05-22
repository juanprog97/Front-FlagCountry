import React from "react";
import { useSelector } from "react-redux";
import "./FilterInput.scoped.scss";

const FilterInput = () => {
  const modeDark = useSelector((state: any) => state.modelTheme.modeDark);
  return (
    <>
      <select
        className="filterContinents"
        data-theme={modeDark ? "dark" : "light"}
        name="browser"
      >
        <option disabled selected value="-1">
          Filter by region
        </option>
        <option value="firefox">Firefox</option>
        <option value="ie">IE</option>
        <option value="chrome">Chrome</option>
        <option value="opera">Opera</option>
        <option value="safari">Safari</option>
      </select>
    </>
  );
};

export default FilterInput;
