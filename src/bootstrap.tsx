import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
// @ts-ignore
import CounterAppTwo from "app2/CounterAppTwo";
// @ts-ignore
import CounterAppOne from "app1/CounterAppOne";
import Header from "./components/header/Header";
import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
console.log("container", store.getState());
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={"leseanjohnson-7-22.us.auth0.com"}
      clientId={"ETTXERQ6Br4y4NYsbRaObDGmXFEDBAQx"}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="app-1"
              element={
                <React.Suspense fallback={"LOADING COUNTER APP ONE"}>
                  <h1 color="#6F60EA">APP-1</h1>
                  <CounterAppOne />
                </React.Suspense>
              }
            />
            <Route
              path="app-2"
              element={
                <React.Suspense fallback={"LOADING COUNTER APP TWO"}>
                  <h1 color="#6F60EA">APP-2</h1>
                  <CounterAppTwo />
                </React.Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
