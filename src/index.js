import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilteredDataContext, FilteredDataProvider } from "./contexts/FilteredDataContext";
export { FilteredDataContext }

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilteredDataProvider>
        <App />
      </FilteredDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
