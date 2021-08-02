// import logo from "./logo.svg";
// import "./App.css";
// import Hello from "./components/Hello";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react"; //import function มาใช้จาก Library

function App() {
  // const handleChangCheckbox = event => {
  //   console.log(event.target.name); // ค่าname ของตัวนัน้
  //   console.log(event.target.value); // ค่า value
  //   console.log(event.target.checked ? "Tick" : "Unticked"); // ค่า Tick
  // };

  //6.4
  // const handleOnClick = event => {
  //   event.preventDefault();
  //   const press = window.confirm("You want to google");
  //   if (press === true) {
  //     window.location.assign("https://google.com");
  //   }
  // };

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
  /*
  const [state, update] = useState("Hello Reacct!!!");
  const [state1, update] = useState("Hello Reacct!!!");
  const [state2, update] = useState("Hello Reacct!!!");

  //Best Practice
  const [message, setMessage] = useState("Hello React");
  const [title, setTitle] = useState("My Title");

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
    //Lab 6.1
    // <input
    //   type="text"
    //   id="username"
    //   placeholder="input value"
    //   onChange={event => console.log(event.target.value)}
    // />

    //เฉลย 6.1

    // <form>
    //   <input type="text" onChange={event => console.log(event.target.value)} />
    // </form>

    //Lab 6.2
    // <form>
    //   <label>Please select :</label>
    //   <select onChange={event => console.log(event.target.value)}>
    //     <option>Thailand</option>
    //     <option>Myanmar</option>
    //     <option>Lao</option>
    //     <option>Cambodia</option>
    //     <option>Vietnam</option>
    //   </select>
    // </form>

    //เฉลย lab 6.2
    // <form>
    //   <select onChange={event => console.log(event.target.value)}>
    //     <option value="Thailand">Thailand</option>
    //     <option value="Singapore">Singapore</option>
    //     <option value="Myanmar">Myanmar</option>
    //     <option value="Lao">Lao</option>
    //     <option value="Cambodia">Cambodia</option>
    //   </select>
    // </form>

    //Lab 6.3
    // <form>
    //   <input
    //     type="checkbox"
    //     name="iphone"
    //     value="iphone"
    //     // checked
    //     onChange={event =>
    //       console.log(`name:${event.target.name} value:${event.target.value}`)
    //     }
    //   />
    //   <label>iphone</label>
    //   <input
    //     type="checkbox"
    //     name="samsung"
    //     value="samsung"
    //     onChange={event =>
    //       console.log(`name:${event.target.name} value:${event.target.value}`)
    //     }
    //   />
    //   <label>samsung</label>
    //   <input
    //     type="checkbox"
    //     name="oppo"
    //     value="oppo"
    //     onChange={event =>
    //       console.log(`name:${event.target.name} value:${event.target.value}`)
    //     }
    //   />
    //   <label>oppo</label>
    // </form>

    //เฉลย lab 6.3
    // <div>
    //   <input
    //     type="checkbox"
    //     name="phoneBrand"
    //     value="Apple"
    //     onChange={handleChangCheckbox}
    //   />
    //   <label>Apple</label>
    //   <input
    //     type="checkbox"
    //     name="phoneBrand"
    //     value="Samsung"
    //     onChange={handleChangCheckbox}
    //   />
    //   <label>Samsung</label>
    //   <input
    //     type="checkbox"
    //     name="phoneBrand"
    //     value="Oppo"
    //     onChange={handleChangCheckbox}
    //   />
    //   <label>Oppo</label>
    //   <input
    //     type="radio"
    //     name="gendre"
    //     value="Male"
    //     onChange={handleChangCheckbox}
    //   />
    //   <label>Male</label>
    //   <input
    //     type="radio"
    //     name="gendre"
    //     value="Female"
    //     onChange={handleChangCheckbox}
    //   />
    //   <label>Female</label>
    // </div>

    //6.4
    // <div>
    //   <a href="https://google.com" onClick={handleOnClick}>
    //     Goto Google
    //   </a>
    // </div>

    //State

    // <div>
    //   <h1>{message}</h1>
    //   <button onClick={handleOnClick}>Click to change Text</button>
    //   <button onClick={() => setMessage("You Clicked Annonymous")}>
    //     Click to change Text
    //   </button>
    // </div>

    //State 2
    // <div className="container">
    //   <button onClick={handleClickAdd}>+</button>
    //   <span>{count}</span>
    //   <button onClick={handleClickSubtract}>-</button>
    // </div>
    // );

    //state 3 Multiple
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
