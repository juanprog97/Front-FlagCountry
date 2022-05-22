import React from "react";
import { DetailsFlag, CatalogFlags } from "./pages";
import Navbar from "./components/Navbar";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const modeDark = useSelector((state: any) => state.modelTheme.modeDark);

  return (
    <div
      className="App"
      style={{
        ["--colorElement" as any]: [
          `var(--clr-${modeDark ? "dark" : "light"}-elements)` as any,
        ],
        ["--colorInput" as any]: [
          `var(--clr-${modeDark ? "dark" : "light"}-input)` as any,
        ],
        ["--colorText" as any]: [
          `var(--clr-${modeDark ? "dark" : "light"}-text)` as any,
        ],
        ["--colorBackground" as any]: [
          `var(--clr-${modeDark ? "dark" : "light"}-background)` as any,
        ],
        ["--fontWeight" as any]: [modeDark ? "bold" : "normal"],
      }}
    >
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CatalogFlags />} />
          <Route path="/details/:country" element={<DetailsFlag />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
