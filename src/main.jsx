// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-ltnzm3qn0q82ggc4.us.auth0.com"
    clientId="21NKDOlQRFBXfNUXdDevCVNjFL6zjfNf"
    authorizationParams={{
      // redirect_uri: window.location.origin,
      redirect_uri: "https://4mser.github.io/perfil",
    }}
  >
    <App />
  </Auth0Provider>
);
