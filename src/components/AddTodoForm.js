import "./AddTodoForm.css";
import { useState } from "react";

function AddTodoForm(props) {
  // sate ก้อนข้อมูล
  const [newTodo, setNewTodo] = useState("");
  //   //state = ช่อง input
  //   const []

  const handleChangeNewTodo = e => {
    //เข้าถึงค่า value ในช่อง input
    const value = e.target.value;

    setNewTodo(value);
  };
  const handleClickAdd = () => {
    if (newTodo !== "") {
      props.addTodo(newTodo);
      setNewTodo("");
    }
  };
  return (
    <div className="add">
      <input
        type="text"
        placeholder="Enter new todo"
        value={newTodo}
        onChange={handleChangeNewTodo}
      />
      <button onClick={handleClickAdd}>Add</button>
    </div>
  );
}
export default AddTodoForm;
