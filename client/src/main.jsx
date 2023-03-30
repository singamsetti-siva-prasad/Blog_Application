import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//axios interceptor
// axios.interceptors.request.use(
//   function (request) {
//     console.log(request);
//     return request;
//   },
//   function (error) {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// //axios interceptor
// axios.interceptors.response.use(
//   function (response) {
//     console.log(response);
//     return response;
//   },
//   function (error) {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
