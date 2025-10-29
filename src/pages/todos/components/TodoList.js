
function TodoList({ todos, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
          onClick={() => onToggle(todo.id)}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="todo-checkbox"
          />
          <span className="todo-text">{todo.text}</span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
