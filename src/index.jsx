import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MinhaFuncao from "./MinhaFuncao";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root")); //pega a referencia do id= root
root.render(
  //renderiza os componentes React em cima do root
  <React.StrictMode>
    <App />
    <MinhaFuncao />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
