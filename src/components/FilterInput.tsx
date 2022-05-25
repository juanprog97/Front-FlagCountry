import { useSelector } from "react-redux";
import "./FilterInput.scoped.scss";

const FilterInput = (props: any) => {
  const modeDark = useSelector((state: any) => state.modelTheme.modeDark);
  const HandleChangeFilter = (event: any) => {
    event.preventDefault();
    props.filterDataCurrently(event.target.value);
  };
  return (
    <>
      <select
        className="filterContinents"
        data-theme={modeDark ? "dark" : "light"}
        title="dropdown-region"
        onChange={HandleChangeFilter}
        defaultValue=""
      >
        <option disabled hidden>
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
