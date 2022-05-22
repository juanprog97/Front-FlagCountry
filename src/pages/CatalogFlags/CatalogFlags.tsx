import React from "react";
import "./CatalogFlags.scss";
import InputSearch from "../../components/InputSearch";
import FilterInput from "../../components/FilterInput";

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
  const allFlags = list.map((flag, index) => {
    return (
      <div id="itemFlag" key={index}>
        <div id="imageFlag">
          <img src="https://flagcdn.com/cn.svg" alt="" />
        </div>
        <div className="container-info">
          <h3>{flag.name}</h3>
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

  return (
    <section className="containerCatalog">
      <div className="containerOptions">
        <InputSearch />
        <FilterInput />
      </div>
      <div className="dataContent">
        {/* <div id="itemFlag">
          <div id="imageFlag">
            <img src="https://flagcdn.com/cn.svg" alt="" />
          </div>
          <div className="container-info">
            <h3>Example</h3>
            <div id="itemInfoData">
              <p>Population:</p>
              <p>4.324.234.343</p>
            </div>
            <div id="itemInfoData">
              <p>Region:</p>
              <p>Asian</p>
            </div>
            <div id="itemInfoData">
              <p>Capital:</p>
              <p>Shangai</p>
            </div>
          </div>
        </div> */}
        {allFlags}
      </div>
    </section>
  );
};

export default MainPage;
