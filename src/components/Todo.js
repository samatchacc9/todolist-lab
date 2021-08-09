import "./Todo.css";

function Todo(props) {
  // console.log(props.todo.id);
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
