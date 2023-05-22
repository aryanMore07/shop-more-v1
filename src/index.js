import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilteredDataContext, FilteredDataProvider } from "./contexts/FilteredDataContext";
export { FilteredDataContext }

// Call make Server
makeServer();

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilteredDataProvider>
        <App />
      </FilteredDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);


