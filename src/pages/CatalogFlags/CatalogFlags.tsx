import { useState, useCallback } from "react";
import "./CatalogFlags.scss";
import InputSearch from "../../components/InputSearch";
import FilterInput from "../../components/FilterInput";
import { useFetchAndLoad, useAsync } from "../../hooks";
import { fetchFlags } from "../../services/flag.services";
import { createListFlagAdapter } from "../../adapters";
import { FlagDetails } from "../../models";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [listAllFlags, setListAllFlags] = useState([]);
  const [regionFilter, setRegionFilter] = useState("");
  const [nameSearchFlag, setNameSearchFlag] = useState("");
  const navigate = useNavigate();

  //Make query api
  const flags = async () => await callEndpoint(fetchFlags(regionFilter));

  const loadFlags = (data: any) => {
    setListAllFlags(createListFlagAdapter(data));
  };
  useAsync(flags, loadFlags, () => {}, [regionFilter]);

  const flagFilter: any = listAllFlags.filter((flag: FlagDetails) => {
    return (
      flag.titleName.toUpperCase().indexOf(nameSearchFlag.toUpperCase()) > -1
    );
  });

  //Props of Children

  const dataFilter = useCallback((regionFilter: string) => {
    setRegionFilter(regionFilter);
  }, []);

  const dataNameSearch = useCallback((nameSearchFlag: string) => {
    setNameSearchFlag(nameSearchFlag);
  }, []);

  //Handle pass route details flag
  const handleOnDetailPage = (event: any) => {
    event.preventDefault();
    const nameFlag = event.currentTarget.getAttribute("data-name");
    navigate(`/details-flag/${nameFlag}`);
  };

  const allFlags = flagFilter.map((flag: any, index: any) => {
    //Normal Element
    return (
      <div
        id="itemFlag"
        key={index}
        onClick={handleOnDetailPage}
        data-name={flag.titleName}
      >
        <div id="imageFlag">
          <img src={flag.srcImage} alt="" />
        </div>
        <h3 id="nameFlag">{flag.titleName}</h3>
        <div className="container-info">
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
        {loading ? <></> : <InputSearch searchNameFlag={dataNameSearch} />}
        {loading ? <></> : <FilterInput filterDataCurrently={dataFilter} />}
      </div>
      <div className="dataContent" title="data-content">
        {loading || listAllFlags.length == 0 ? loadingFlags : allFlags}
      </div>
    </section>
  );
};

export default MainPage;
