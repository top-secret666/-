"use client"
import { useDispatch, useSelector } from "react-redux"
import { getFilteredTodos, getTodosStats, selectTodosCountByStatus } from "../../store/selectors"
import { addTodo, setFilter, toggleTodo } from "../../store/todosSlice"
import TodoFilters from "./components/TodoFilters"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoStats from "./components/TodoStats"


function TodosPage() {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.todos.filter)

  // Мемоизированные селекторы
  const filteredTodos = useSelector(getFilteredTodos)
  const completedCount = useSelector((state) => selectTodosCountByStatus(state, true))
  const activeCount = useSelector((state) => selectTodosCountByStatus(state, false))
  const stats = useSelector(getTodosStats)

  const handleAddTodo = (text) => {
    dispatch(addTodo(text))
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter))
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Задачи (Reselect Demo)</h1>
      <div className="todos-info">
        <p>Откройте консоль браузера, чтобы увидеть, когда селекторы пересчитываются!</p>
      </div>

      <TodoForm onSubmit={handleAddTodo} />
      <TodoFilters currentFilter={filter} onFilterChange={handleFilterChange} />
      <TodoStats stats={stats} completedCount={completedCount} activeCount={activeCount} />
      <TodoList todos={filteredTodos} onToggle={handleToggleTodo} />
    </div>
  )
}

export default TodosPage
