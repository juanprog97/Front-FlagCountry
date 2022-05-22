import React from "react";
import { DetailsFlag, CatalogFlags } from "./pages";
import Navbar from "./components/Navbar";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CatalogFlags />} />
            <Route path="/details/:country" element={<DetailsFlag />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
