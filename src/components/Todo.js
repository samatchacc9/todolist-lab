import "./Todo.css";
import { useState } from "react";
function Todo(props) {
  useState();
  return (
    <li>
      <span>{props.todo.name}</span>
      <div>
        <button onClick={() => props.pressEdit(props.todo.id)}>Edit</button>
        <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
      </div>
    </li>
  );
}
export default Todo;
