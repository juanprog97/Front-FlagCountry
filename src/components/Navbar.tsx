import React, { useEffect } from "react";
import "./Navbar.scoped.scss";
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
    <nav className="containerNav">
      <p>Where in the world?</p>
      <div id="changeState" onClick={handleChangeTheme}>
        <span> Dark Mode</span>
      </div>
    </nav>
  );
};

export default Navbar;
