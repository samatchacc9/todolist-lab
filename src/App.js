// import logo from "./logo.svg";
// import "./App.css";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    // Lab 4.1
    // <div>
    //   <h1>Hello My Friend</h1>
    //   <p>Friend List</p>
    //   <ul>
    //     <li>John</li>
    //     <li>Jack</li>
    //     <li>Jane</li>
    //   </ul>
    // </div>

    // Lab 4.2
    <div>
      <div>
        <label for="cars">Provice: </label>
        <select name="cars" id="cars">
          <option value="select">Select</option>
        </select>
      </div>

      <div>
        <label for="cars">District: </label>
        <select name="cars" id="cars">
          <option value="select">Select</option>
        </select>
      </div>
    </div>

    //Lab 4.3
  );
}

export default App;
