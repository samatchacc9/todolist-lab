import "./Todo.css";
function Todo(props) {
  return (
    <li>
      <span>{props.todos.name}</span>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
}
export default Todo;
