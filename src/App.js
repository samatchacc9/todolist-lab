// import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";
import EditTodoForm from "./components/EditTodoForm";
import SearchForm from "./components/SearchForm";
import "./App.css";

function App() {
  //data
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Travel" },
    { id: uuidv4(), name: "Shopping" },
    { id: uuidv4(), name: "Watching a movie" },
    { id: uuidv4(), name: "Travel" },
  ]);

  //state
  const [isEditting, setIsEditing] = useState(false);
  const [edittingItem, setEdittingItem] = useState({});
  const [filteredText, setFilteredText] = useState("");

  //search
  const searchTodo = searchText => {
    setFilteredText(searchText);
  };
  //กดปุ่ม clear Search
  const clearSearch = () => {
    setFilteredText("");
  };

  //function แสดงข้อมูลเมื่อกดปุ่มค้นหา
  const showTodos = todos.filter(item =>
    item.name.toLowerCase().includes(filteredText.toLowerCase())
  );

  //add
  const addTodo = newTodo => {
    const newItem = {
      id: uuidv4(),
      name: newTodo,
    };

    const newTodos = [...todos, newItem];
    setTodos(newTodos);
  };

  // edit
  const editTodo = (id, newName) => {
    const idx = todos.findIndex(item => item.id === id);
    const newTodos = [...todos];
    newTodos[idx].name = newName;
    setTodos(newTodos);
    setIsEditing(false);
  };

  //delete
  const deleteTodo = id => {
    const idx = todos.findIndex(item => item.id === id);
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  //กดปุ่ม edit
  const triggerEdit = id => {
    setIsEditing(true);
    const idx = todos.findIndex(item => item.id === id);
    setEdittingItem(todos[idx]);
  };

  //กดปุ้ม cancel
  const cancelEditForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="container">
      <SearchForm searchTodo={searchTodo} clearSearch={clearSearch} />

      {/* <AddTodoForm addTodo={addTodo} />
      {isEditting && <EditTodoForm cancelEditForm={cancelEditForm} edittingItem={edittingItem} />} */}

      {isEditting === true ? (
        <EditTodoForm
          editTodo={editTodo}
          cancelEditForm={cancelEditForm}
          edittingItem={edittingItem}
        />
      ) : (
        <AddTodoForm addTodo={addTodo} />
      )}

      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          marginTop: "1rem",
        }}
      >
        {showTodos.map(item => (
          <Todo
            key={item.id}
            todo={item}
            deleteTodo={deleteTodo}
            triggerEdit={triggerEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
