import React from "react";
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-ll6rcmq3e5in4er3.us.auth0.com"
    clientId="Hoy0YPDMcLzMfTmkCx3dTLP4GO9SwxMB"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/callback'
    }}
  >
    <App />
  </Auth0Provider>
);
