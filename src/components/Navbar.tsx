import React, { useEffect } from "react";
import "./Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "../redux/states/theme";

const Navbar = () => {
  const themeState: Boolean = useSelector(
    (state: any) => state.modelTheme.modeDark
  );
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(changeState());
  };

  return (
    <nav
      className="containerNav"
      style={{
        ["--colorElement" as any]: [
          `var(--clr-${themeState ? "dark" : "light"}-elements)` as any,
        ],
        ["--colorInput" as any]: [
          `var(--clr-${themeState ? "dark" : "light"}-input)` as any,
        ],
        ["--colorText" as any]: [
          `var(--clr-${themeState ? "dark" : "light"}-text)` as any,
        ],
      }}
    >
      <p>Where in the world?</p>
      <div id="changeState" onClick={handleChangeTheme}>
        <span theme-state={themeState ? "dark" : "light"}> Dark Mode</span>
      </div>
    </nav>
  );
};

export default Navbar;
