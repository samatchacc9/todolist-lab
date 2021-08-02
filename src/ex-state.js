// import logo from "./logo.svg";
// import "./App.css";
// import Hello from "./components/Hello";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react"; //import function มาใช้จาก Library

function App() {
  //=====State=====//
  // console.log("App is called");
  // let text = "Hello React";

  // const result = useState("Hello React!!!"); // เก็บข้อมูล satateค่าเริ่มต้น
  // console.log(result);
  //เขียน แบบยาวไม่นิยม
  /*
  const state = result[0]; //Hello React state ปัจจุบัน
  const update = result[1]; //ตัว update
  */

  //state advance style destructuring เขียนแบบสั้น  not good

  // const [state, update] = useState("Hello Reacct!!!");
  // const [state1, update] = useState("Hello Reacct!!!");
  // const [state2, update] = useState("Hello Reacct!!!");

  //state 1 change ข้อความ Best Practice
  /*
  const [message, setMessage] = useState("Hello React");
  // const [title, setTitle] = useState("My Title");

  const handleOnClick = () => {
    // update("You clicked a button"); // เมื่อ click ให้มาฟังก์ชั่นที่ set

    setMessage("You clicked a button");

    // Wrong
    // console.log("clicked");
    // text = "You clicked a button";
    // console.log(text);
  };
  */

  //State 2
  const [count, setCount] = useState(0); // เริ่มต้นเท่ากับ 0

  const handleClickAdd = () => {
    // setCount(count + 1); // มีโอกาสผิดพลาด
    setCount(currentState => currentState + 1); // อ้างอิงจากค่าปัจจุบัน  currentState เป็น paramiter function  setCount
  };
  const handleClickSubtract = () => {
    // setCount(count - 1);
    setCount(currentCount => currentCount - 1);
  };

  return (
    // State 1 ตัวอย่างที่1 เปลี่ยนข้อความ

    //<div>
    // <h1>{message}</h1>
    // <button onClick={handleOnClick}>Click to change Text</button>
    /* <button onClick={() => setMessage("You Clicked Annonymous")}>
        Click to change Text
      </button> */
    // </div>

    //State 2 ตัวอย่างที่2 counter
    /*
    <div className="container">
      <button onClick={handleClickAdd}>+</button>
      <span>{count}</span>
      <button onClick={handleClickSubtract}>-</button>
    </div>
    */

    //state 3 Multiple ประกาศ state หลายตัว
    //  const [username, setUsername] = useState('');
    //  const [password, setPassword] = useState('');
    //  const [email, setEmail] = useState('');
    //  const [birthDate, setBirthDate, = useState('');

    // Group state ทำการยุบ
    //  const [user, setUser] = useState({
    //    username: '',
    //    password: '',
    //    email: '',
    //    birthDate: '',

    <div></div>
  );
}

export default App;
