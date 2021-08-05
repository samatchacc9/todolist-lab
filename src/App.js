import { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";

// function App() {
//   const arr = [2, 6, 7, 7];
//   const render = arr.map((item, index) => <li key={index}> {item}</li>);
//   return (
//     //แบบที่ 1 ใช้ตัวแปร render เป็นตัวแทน
//     /*
//     <ul>
//       <li>{render}</li>
//     </ul>
//     */

//     //แบบที่ 2 render แบบตรงๆ
//     <ul>
//       {arr.map((item, index) => (
//         <li key={index}> {item}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;

//Lab 8
// function App() {
//   const friends = ["May", "Team", "Pang", "Mint", "Sah"];

//   return (
//     <ul>
//       {friends.map((item, index) => (
//         <li key={index}> {item} </li>
//       ))}
//     </ul>
//   );
// }
// export default App;

//Lab 2
// function App() {
//   const posts = [
//     {
//       id: "1",
//       message: "Hello monday",
//       author: "Jack",
//       date: "29 Jan 2021 10.35AM",
//     },
//     {
//       id: "2",
//       message: "Its funny",
//       author: "Bill",
//       date: "04 Feb 2021 09.12AM",
//     },
//     {
//       id: "3",
//       message: "Hard day",
//       author: "Jill",
//       date: "05 Aug 2021 02.15PM",
//     },
//   ];

//   return (
//     <ul>
//       {posts.map(item => (
//         <li key={item.id}>
//           {item.message} {item.author} {item.date}
//         </li>
//       ))}
//       ;
//     </ul>
//   );
// }

// export default App;

// //Lab 3
// function App(props) {
//   const posts = [
//     {
//       id: "1",
//       message: "Hello monday",
//       author: "Jack",
//       date: "29 Jan 2021 10.35AM",
//     },
//     {
//       id: "2",
//       message: "Its funny",
//       author: "Bill",
//       date: "04 Feb 2021 09.12AM",
//     },
//     {
//       id: "3",
//       message: "Hard day",
//       author: "Jill",
//       date: "05 Aug 2021 02.15PM",
//     },
//   ];

//   return (
//     <>
//       {posts.map(item => (
//         <Post key={item.id} post={item} />
//       ))}
//     </>
//   );
// }

// function Post(props) {
//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         padding: "1rem",
//         marginBottom: "1rem",
//       }}
//     >
//       <h2>{props.post.message}</h2>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <span>Author: {props.post.author}</span>
//         <span>{props.post.date}</span>
//       </div>
//     </div>
//   );
// }

// export default App;

// Lab 4
function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Travel" },
    { id: 2, name: "Shopping" },
    { id: 6, name: "Shopping" },
    { id: 7, name: "Shopping" },
    { id: 9, name: "Shopping" },
    { id: 12, name: "Shopping" },
    { id: 17, name: "Shopping" },
  ]);

  // todos[0];
  // todos[1];
  // todos[todos.length - 1].id + 1; // 18
  // todos[0].id = 1;

  console.log(todos);

  const addTodo = newTodo => {
    const newItem = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      name: newTodo,
    };

    const newTodos = [...todos, newItem];
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <AddTodoForm addTodo={addTodo} />
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          marginTop: "1rem",
        }}
      >
        {todos.map(item => (
          <Todo key={item.id} todo={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
