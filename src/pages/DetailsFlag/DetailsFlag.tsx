import React from "react";
import "./DetailsFlag.scoped.scss";

export const DetailsFlag = () => {
  return (
    <section className="containerDetailsFlag">
      <button>
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
          <img src="https://flagcdn.com/cn.svg" alt="" />
        </div>

        <div className="detailsText">
          <h2>China</h2>
          <div id="listDetails">
            <div id="columnText">
              <p id="itemDetail">
                <span>Native Name: </span>
                answer
              </p>

              <p id="itemDetail">
                <span>Population: </span>
                answer
              </p>

              <p id="itemDetail">
                <span>Region: </span>
                answer
              </p>

              <p id="itemDetail">
                <span>Suspanregion: </span>
                answer
              </p>

              <p id="itemDetail">
                <span>Capital: </span>
                answer
              </p>
            </div>
            <div id="columnText">
              <p id="itemDetail">
                <span>Top Level Domain: </span>
                answer
              </p>

              <p id="itemDetail">
                <span>Currencies: </span>
                answer
              </p>

              <p id="itemDetail">
                <span>Languages: </span>
                answer
              </p>
            </div>
          </div>
          <div className="listBorder">
            <p>Borders</p>
            <div id="listItemBorders">
              <button>France</button>
              <button>Germany</button>
              <button>Netherlands</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
