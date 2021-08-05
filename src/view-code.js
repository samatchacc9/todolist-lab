import { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";
function App() {
  // 1. จำลองข้อมูล
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

  //ฟังก์ชันเพิ่ม todo list
  const addTodo = newTodo => {
    //เพิ่ม dataใหม่ สร้าง obj ก้อนใหม่
    const newItem = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      name: newTodo,
    };
    //เอา data ที่เพิ่ม newTodos ไปต่อท้าย
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
