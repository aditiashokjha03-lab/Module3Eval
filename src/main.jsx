import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";
import { RestaurantProvider } from "./Context/RestaurantContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
      </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);
