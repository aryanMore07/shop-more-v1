import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartDataContext, CartDataProvider } from "./contexts/cartDataContext";
import { FilteredDataContext, FilteredDataProvider } from "./contexts/FilteredDataContext";
import { WishlistDataContext, WishlistDataProvider } from "./contexts/wishlistDataContext";
export { CartDataContext }
export { FilteredDataContext }
export { WishlistDataContext }

// Call make Server
makeServer();

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilteredDataProvider>
        <WishlistDataProvider>
          <CartDataProvider>
            <App />
          </CartDataProvider>
        </WishlistDataProvider>
      </FilteredDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);


