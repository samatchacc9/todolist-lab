// import logo from "./logo.svg";
// import "./App.css";
// import Hello from "./components/Hello";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Menu from "./components/Menu";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  const clickHide = e => {
    setShow;
  };
  return <button onClick={clickHide}>Click to hide me</button>;
}

export default App;
