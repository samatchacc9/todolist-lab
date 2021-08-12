import { useState } from "react";

function EditTodoForm(props) {
  // edittingItem { id, name }
  const [todo, setTodo] = useState(props.edittingItem.name);
  const [error, setError] = useState("");

  // ช่อง input
  const handleChangeTodo = e => {
    if (e.target.value === "") {
      setError("Todo is required");
    } else {
      setError("");
    }
    setTodo(e.target.value);
  };

  // click ปุ่ม save
  const handleClickSave = () => {
    if (todo === "") {
      setError("Todo is required");
    } else {
      setError("");
      props.editTodo(props.edittingItem.id, todo);
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <input type="text" value={todo.name} onChange={handleChangeTodo} />
      <button onClick={handleClickSave}>Save</button>
      <button onClick={props.cancelEditForm}>Cancel</button>
      {error && (
        <p style={{ fontSize: "0.75rem", margin: 0, padding: 0, color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default EditTodoForm;
