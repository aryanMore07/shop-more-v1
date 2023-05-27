import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilteredDataContext, FilteredDataProvider } from "./contexts/FilteredDataContext";
import { CartDataContext, CartDataProvider } from "./contexts/cartDataContext";
export { FilteredDataContext }
export { CartDataContext }

// Call make Server
makeServer();

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilteredDataProvider>
        <CartDataProvider>
          <App />
        </CartDataProvider>
      </FilteredDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);


