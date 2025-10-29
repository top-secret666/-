function TodoFilters({ currentFilter, onFilterChange }) {
  return (
    <div className="todo-filters">
      <button onClick={() => onFilterChange("all")} className={`filter-btn ${currentFilter === "all" ? "active" : ""}`}>
        Все
      </button>
      <button
        onClick={() => onFilterChange("active")}
        className={`filter-btn ${currentFilter === "active" ? "active" : ""}`}
      >
        Активные
      </button>
      <button
        onClick={() => onFilterChange("completed")}
        className={`filter-btn ${currentFilter === "completed" ? "active" : ""}`}
      >
        Завершенные
      </button>
    </div>
  )
}

export default TodoFilters
