import React, { useEffect } from "react";
import "./CatalogFlags.scss";
import InputSearch from "../../components/InputSearch";
import FilterInput from "../../components/FilterInput";
import { AppStore } from "../../redux/store";
import { useFetchAndLoad, useAsync } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFlag } from "../../services/flag.services";
import { createListFlag, filterFlags } from "../../redux/states/ListFlags";
import { createListFlagAdapter } from "../../adapters";

export const MainPage = () => {
  const list = [
    {
      population: "232.323.423",
      region: "Asian",
      capital: "Asian",
      name: "China",
    },
    {
      population: "232.323.423",
      region: "Asian",
      capital: "Asian",
      name: "China",
    },
    {
      population: "232.323.423",
      region: "Asian",
      capital: "Asian",
      name: "China",
    },

    {
      population: "232.323.423",
      region: "Asian",
      capital: "Asian",
      name: "China",
    },

    {
      population: "232.323.423",
      region: "Asian",
      capital: "Asian",
      name: "China",
    },

    {
      population: "232.323.423",
      region: "Asian",
      capital: "Asian",
      name: "China",
    },

    {
      population: "232.323.423",
      region: "Asian",
      capital: "Asian",
      name: "China",
    },
    {
      population: "232.323.423",
      region: "Asian",
      capital: "Asian",
      name: "China",
    },
    {
      population: "232.323.423",
      region: "Asian",
      capital: "Asian",
      name: "China",
    },
    {
      population: "232.323.423",
      region: "Asian",
      capital: "Asian",
      name: "China",
    },
  ];

  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const listFlags = useSelector((store: AppStore) => store.flags.listFlag);

  const allFlags = listFlags.map((flag: any, index: any) => {
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
  const flags = async () => await callEndpoint(fetchAllFlag());
  const loadAllFlag = (data: any) => {
    dispatch(createListFlag(createListFlagAdapter(data)));
  };
  useAsync(flags, loadAllFlag, () => {}); //LoadAll Flags

  return (
    <section className="containerCatalog">
      <div className="containerOptions">
        {loading ? <></> : <InputSearch />}
        {loading ? <></> : <FilterInput />}
      </div>
      <div className="dataContent">{loading ? loadingFlags : allFlags}</div>
    </section>
  );
};

export default MainPage;
