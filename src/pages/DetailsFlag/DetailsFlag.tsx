import React, { useState, useEffect } from "react";
import "./DetailsFlag.scoped.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFetchAndLoad, useAsync } from "../../hooks";
import { createItemFlagAdapter, codeFlagAdapter } from "../../adapters";
import { searchFlagByName, fetchFlags } from "../../services/flag.services";
import { useNavigate } from "react-router-dom";

export const DetailsFlag = () => {
  const { name } = useParams();
  const [listCodes, setListCodes] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, callEndpoint } = useFetchAndLoad();
  const [flagDetail, setFlagDetail] = useState({
    titleName: "",
    nativeName: "",
    population: "",
    region: "",
    subRegion: "",
    capital: "",
    srcImage: "",
    topLevelDomain: [],
    currencies: "",
    languages: "",
    borderCountries: [],
  });

  const loadFlagDetail = async () => await callEndpoint(searchFlagByName(name));
  const loadCodeFlag = async () => await callEndpoint(fetchFlags());
  const changeStateFlag = (data: any) => {
    setFlagDetail({ ...createItemFlagAdapter(data[0]) });
  };

  const changeStateCodesFlags = (data: any) => {
    setListCodes(codeFlagAdapter(data));

    return codeFlagAdapter(data);
  };

  useAsync(loadCodeFlag, changeStateCodesFlags, () => {});
  useAsync(loadFlagDetail, changeStateFlag, () => {}, [name]);

  return (
    <section className="containerDetailsFlag">
      <button
        onClick={(event) => {
          event.preventDefault();
          navigate("/");
        }}
      >
        <svg
          width="17px"
          height="17px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z" />
        </svg>
        <span>Back</span>
      </button>
      <div className="containerDetailsText">
        <div className="imgFlag">
          <img src={flagDetail.srcImage} alt="" />
        </div>

        <div className="detailsText">
          <h2>{flagDetail.titleName}</h2>
          <div id="listDetails">
            <div id="columnText">
              <p id="itemDetail">
                <span>Native Name: </span>
                {flagDetail.nativeName}
              </p>

              <p id="itemDetail">
                <span>Population: </span>
                {flagDetail.population}
              </p>

              <p id="itemDetail">
                <span>Region: </span>
                {flagDetail.region}
              </p>

              <p id="itemDetail">
                <span>Sub region: </span>
                {flagDetail.subRegion}
              </p>

              <p id="itemDetail">
                <span>Capital: </span>
                {flagDetail.capital}
              </p>
            </div>
            <div id="columnText">
              <p id="itemDetail">
                <span>Top Level Domain: </span>
                {flagDetail.topLevelDomain}
              </p>

              <p id="itemDetail">
                <span>Currencies: </span>
                {flagDetail.currencies}
              </p>

              <p id="itemDetail">
                <span>Languages: </span>
                {flagDetail.languages}
              </p>
            </div>
          </div>
          <div className="listBorder">
            <p>Borders</p>
            {flagDetail.borderCountries.map((border, index) => {
              return (
                <button id="bordersItems"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(`/details-flag/${listCodes[border]}`);
                  }}
                  key={index}
                >
                  {listCodes[border]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
