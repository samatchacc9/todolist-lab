// import logo from "./logo.svg";
import "./App.css";
// import Hello from "./components/Hello";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Menu from "./components/Menu";
import { useState } from "react";

//Lab7.1
// function App() {
//   const [hide, setHide] = useState(<button>Click to hide me</button>);

//   const clickHide = () => {
//     setHide(null);
//     // setHide("");
//   };

//   return <div onClick={clickHide}>{hide}</div>;
// }
// export default App;

//awesome Lab7.1
// function App() {
//   const [hide, setHide] = useState(false);
//   const button =
//     hide === true ? null : (
//       <button onClick={() => setHide(true)}>Click to hide me</button>
//     );
//   return <div>{button}</div>;
// }
// export default App;

//Lab7.2
// function App() {
//   const [hide, setHide] = useState("Text");
//   const clickHideText = () => {
//     setHide(null);
//     // setHide('');
//   };
//   return (
//     <div>
//       <button onClick={clickHideText}>Click to hide text</button>
//       <h1>{hide}</h1>
//     </div>
//   );
// }
// export default App;

// awesome Lab 7.2

// function App(){
//   const [show, setShow] = useState(true);
//   const render = show ? <h1>Text</h1>: null
// return (
//   <div>
//     <button onClick={() => setShow}>Hide me</button>
//   </div>
// )
// }
// export default App;

//Lab 7.3
// function App() {
//   const [toggle, setToggle] = useState("Hide");
//   const clickToggle = () => {
//     if (toggle === "Hide") {
//       setToggle("Show");
//     } else {
//       setToggle("Hide");
//     }
//   };
//   return (
//     <div>
//       <button onClick={clickToggle}>{toggle}</button>
//     </div>
//   );
// }
// export default App;

//awesome Lab 7.3

//awesome Lab7.4

//Lab7.4
// function App() {
// const [money, setMoney] = useState(0);
// const changInput = event => {
//   setMoney(event.target.value * 30);
// };
// return (
//   <div>
//     <label>Enter Dollar:</label>
//     <input type="number" onChange={changInput} />
//     <p>
//       Convert to Bath :<span style={{ color: "red" }}>{money}</span> Baht
//     </p>
//   </div>
// );
//
///
///
//จัดการ input การผูก state เข้ากับ value
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("1234");

//   const handleClickClearButton = () => {
//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <form>
//       <div>
//         <label>Email: </label>
//         <input
//           type="text"
//           value={email}
//           onChange={event => setEmail(event.target.value)}
//         />
//       </div>
//       <div>
//         <label>Password: </label>
//         <input
//           type="text"
//           value={password}
//           onChange={event => setPassword(event.target.value)}
//         />
//       </div>
//       <div>
//         <button type="button" onClick={handleClickClearButton}>
//           Clear
//         </button>
//       </div>
//     </form>
//   );
// }
// export default App;

//Lab7.5
// function App() {
//   let value = "";
//   const [remindString, setRemindString] = useState();
//   const [border, setBorder] = useState();
//   const [text, setText] = useState();
//   const Input = event => {
//     value = event.target.value;
//   };
//   const Color = (message, colorText, colorBorder) => {
//     setRemindString(currentmessage => (currentmessage = message));
//     setBorder(currentcolorBorder => (currentcolorBorder = colorBorder));
//     setText(currentcolorText => (currentcolorText = colorText));
//   };
//   const checkNum = event => {
//     event.preventDefault();
//     if (!value) {
//       Color("Phone Number is required", "colorTextWrong", "borderColorWrong");
//     } else if (isNaN(value.trim()))
//       Color("Phone Number is invalid", "colorTextWrong", "borderColorWrong");
//     else if (value.length !== 10) {
//       Color("Invalid length", "colorTextWrong", "borderColorWrong");
//     } else {
//       Color("Your number is valid", "colorTextCorrect", "borderColorCorrect");
//     }
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Phone Number"
//         onChange={Input}
//         className={border}
//       />
//       <button type="submit" onClick={checkNum}>
//         Check
//       </button>
//       <p className={text}>{remindString}</p>
//     </div>
//   );
// }
// export default App;

//เฉลย 7.5
function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleClickCheckBtn = () => {
    if()
    setError("Phone number is required");
  }

  const handleChangePhoneNumber = event => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div>
      <div>
        <input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handleChangePhoneNumber}
        />
        <button onClick={handleClickCheckBtn}>Check</button>
      </div>
    </div>
  );
}
export default App;

//lab7.6
// function App() {
//   const [result, setResult] = useState(
//     <select name="District" id="District">
//       <option value="BungKum">BungKum</option>
//       <option value="Prawed">Prawed</option>
//       <option value="Bangkapi">Bangkapi</option>
//     </select>
//   );
//   const choose = event => {
//     if (event.target.value === "Bangkok") {
//       setResult(
//         <select name="District" id="District">
//           <option value="BungKum">BungKum</option>
//           <option value="Prawed">Prawed</option>
//           <option value="Bangkapi">Bangkapi</option>
//         </select>
//       );
//     } else {
//       setResult(
//         <select name="District" id="District">
//           <option value="Meung">Meung</option>
//           <option value="Banpong">Banpong</option>
//           <option value="Banpong">NongPo</option>
//         </select>
//       );
//     }
//   };
//   return (
//     <div>
//       <label htmlFor="Province">Province : </label>
//       <select name="Province" id="Province" onChange={choose}>
//         <option value="Bangkok">Bangkok</option>
//         <option value="Ratchaburi">Ratchaburi</option>
//       </select>
//       <label htmlFor="District">District: </label>
//       {result}
//     </div>
//   );
// }
// export default App;

//Awesome เฉลยจาก camp
