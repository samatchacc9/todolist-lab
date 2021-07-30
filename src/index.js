import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import logo from "./asset/logo192.png";
//import แบบ name export แบบที่1
// import { Welcome, Greeting, PI } from "./component/Welcome";
// default แบบที่2
// import Component2 from "./component/Welcome";
//แแบบ 3 ยุบรวมทั้ง default และ name export
import Component, { Welcome, Greeting, PI } from "./component/Welcome";
// import แบบรวมศูนย์ไม่เขียนทีละ function
// import * as W from "./component/Welcome";

function App1() {
  return (
    <div>
      <img src="https://picsum/100/100" />
      <Welcome />
      <Greeting />
      <Component />
    </div>
  );
}

console.log(PI);

ReactDOM.render(
  <React.StrictMode>
    {/* <Welcome /> */}
    {/* <Greeting /> */}
    {/* <Component2 /> */}
    <App1 /> {/* Render ทีเดียว */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
