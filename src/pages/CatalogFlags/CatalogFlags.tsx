import { useState, useCallback } from "react";
import "./CatalogFlags.scss";
import InputSearch from "../../components/InputSearch";
import FilterInput from "../../components/FilterInput";
import { AppStore } from "../../redux/store";
import { useFetchAndLoad, useAsync } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlags } from "../../services/flag.services";
import { createListFlag, filterFlags } from "../../redux/states/ListFlags";
import { createListFlagAdapter } from "../../adapters";
import { FlagDetails } from "../../models";

export const MainPage = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const listAllFlags = useSelector((store: AppStore) => store.flags.listFlag);
  const [regionFilter, setRegionFilter] = useState("");

  const flags = async () => await callEndpoint(fetchFlags(regionFilter));

  const loadFlags = (data: any) => {
    dispatch(createListFlag(createListFlagAdapter(data)));
  };
  useAsync(flags, loadFlags, () => {}, [regionFilter]); //LoadAll Flags

  const flagFilter: any = listAllFlags.filter((flag: FlagDetails) => flag);

  const dataFilter = useCallback((regionFilter: string) => {
    setRegionFilter(regionFilter);
  }, []);

  const allFlags = flagFilter.map((flag: any, index: any) => {
    //Normal Element
    return (
      <div id="itemFlag" key={index}>
        <div id="imageFlag">
          <img src={flag.srcImage} alt="" />
        </div>
        <div className="container-info">
          <h3>{flag.titleName}</h3>
          <div id="itemInfoData">
            <p>Population:</p>
            <p>{flag.population}</p>
          </div>
          <div id="itemInfoData">
            <p>Region:</p>
            <p>{flag.region}</p>
          </div>
          <div id="itemInfoData">
            <p>Capital:</p>
            <p>{flag.capital}</p>
          </div>
        </div>
      </div>
    );
  });

  const loadingFlags = Array(10)
    .fill(0)
    .map((e, i) => {
      return (
        <div id="itemFlag" key={i}>
          <div id="imageFlagSke"></div>
          <div className="container-infoSke">
            <div id="infoSke"></div>
            <div id="infoSke"></div>
            <div id="infoSke"></div>
            <div id="infoSke"></div>
          </div>
        </div>
      );
    }); //Making SkELETON Loading :)

  return (
    <section className="containerCatalog">
      <div className="containerOptions">
        {loading ? <></> : <InputSearch />}
        {loading ? <></> : <FilterInput filterDataCurrently={dataFilter} />}
      </div>
      <div className="dataContent">{loading ? loadingFlags : allFlags}</div>
    </section>
  );
};

export default MainPage;
