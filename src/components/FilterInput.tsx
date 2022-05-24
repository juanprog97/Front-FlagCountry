import { useSelector } from "react-redux";
import "./FilterInput.scoped.scss";

const FilterInput = (props: any) => {
  const modeDark = useSelector((state: any) => state.modelTheme.modeDark);
  const HandleChangeFilter = (event: any) => {
    props.filterDataCurrently(event.target.value);
  };
  return (
    <>
      <select
        className="filterContinents"
        data-theme={modeDark ? "dark" : "light"}
        name="continent"
        onChange={HandleChangeFilter}
      >
        <option disabled selected value="-1">
          Filter by region
        </option>
        <option value="">All</option>
        <option value="africa">Africa</option>
        <option value="ame">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </>
  );
};

export default FilterInput;
