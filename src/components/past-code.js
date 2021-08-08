function Todo(props) {
  // todo { id, name }
  return (
    <li style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ marginRight: "1rem" }}>{props.todo.name}</span>
      <div>
        <button
          style={{ marginRight: "1rem" }}
          onClick={() => props.triggerEdit(props.todo.id)}
        >
          Edit
        </button>
        <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default Todo;

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
</ul>;
