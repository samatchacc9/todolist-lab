import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
function App() {
  //data + creat state

  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Travel" },
    { id: uuidv4(), name: "Shoppping" },
    { id: uuidv4(), name: "Watching a movie" },
  ]);

  //function add
  function addTodo(newTodo) {
    //สร้างตัวแปรเก็บก้อนข้อมูลใหม่
    const newItem = { id: uuidv4(), name: newTodo };

    //สร้างตัวแปรต่อ data เข้าไปใหม่ เพื่อทำการแกะ [] ออกด้วยการ spread แล้วต่อข้อมูลใหม่ข้างท้าย
    const newTodos = [...todos, newItem];

    //set state การเปลี่ยนแปลงข้อมูลใหม่ และ return สู่ todos
    setTodos(newTodos);
  }

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(item => (
          <Todo key={item.id} todos={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
