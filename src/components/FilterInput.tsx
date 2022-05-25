import { useSelector } from "react-redux";
import { useState } from "react";
import "./FilterInput.scoped.scss";

const FilterInput = (props: any) => {
  const modeDark = useSelector((state: any) => state.modelTheme.modeDark);
  const [valueRegion, setValueRegion] = useState("-1");
  const valuesRegion = [
    {
      label: "All",
      value: "",
    },
    {
      label: "Africa",
      value: "africa",
    },
    {
      label: "America",
      value: "ame",
    },
    {
      label: "Asia",
      value: "asia",
    },
    {
      label: "Europe",
      value: "europe",
    },
    {
      label: "Oceania",
      value: "oceania",
    },
  ];
  const HandleChangeFilter = (event: any) => {
    event.preventDefault();

    props.filterDataCurrently(event.target.value);
    setValueRegion(event.target.value);
  };
  return (
    <>
      <select
        className="filterContinents"
        data-theme={modeDark ? "dark" : "light"}
        title="dropdown-region"
        onChange={HandleChangeFilter}
        value={valueRegion}
      >
        <option value="-1" disabled>
          Filter by region
        </option>
        {valuesRegion.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </>
  );
};

export default FilterInput;
