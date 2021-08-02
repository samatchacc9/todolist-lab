// import logo from "./logo.svg";
// import "./App.css";
// import Hello from "./components/Hello";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Menu from "./components/Menu";

function App() {
  // const handleChangCheckbox = event => {
  //   console.log(event.target.name); // ค่าname ของตัวนัน้
  //   console.log(event.target.value); // ค่า value
  //   console.log(event.target.checked ? "Tick" : "Unticked"); // ค่า Tick
  // };

  const handleOnClick = event => {
    event.preventDefault();
    const press = window.confirm("You want to google");
    if (press === true) {
      window.location.assign("https://google.com");
    }
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
    <div>
      <a href="https://google.com" onClick={handleOnClick}>
        Goto Google
      </a>
    </div>
  );
}

export default App;
