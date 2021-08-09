import "./EditTodoForm.css";
import { useState } from "react";

function EditTodoForm(props) {
  // state ข้อความ
  const [todo, setTodo] = useState(props.editingItem.name);
  //state error
  const [error, setError] = useState("");

  //function set ค่าเก็บไว้ใน state todo เริ่มต้น
  const handlerChangeTodo = e => {
    //check error
    if (e.target.value === "") {
      setError("Todo is required");
    } else {
      setError("");
    }
    setTodo(e.target.value);
  };

  //function save ข้อความที่ inputเข้ามา
  const handlerClickSave = () => {
    if (todo === "") {
      setError("Todo is required");
    } else {
      setError("");
      props.editTodo(props.editingItem.div, todo);
    }
  };

  return (
    <div className="form">
      <input type="text" value={todo} onChange={handlerChangeTodo} />
      <button onClick={handlerClickSave}>Save</button>
      <button onClick={props.cancelEditForm}>Cancel</button>
    </div>
  );
}
export default EditTodoForm;
