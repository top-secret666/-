import { createSelector } from "reselect"

const getTodos = (state) => state.todos.items
const getFilter = (state) => state.todos.filter

// Этот селектор пересчитывается только когда меняются todos или filter
export const getFilteredTodos = createSelector([getTodos, getFilter], (todos, filter) => {
  console.log("[v0] getFilteredTodos вычисляется заново")
  switch (filter) {
    case "completed":
      return todos.filter((t) => t.completed)
    case "active":
      return todos.filter((t) => !t.completed)
    default:
      return todos
  }
})

// Принимает дополнительный параметр completed для демонстрации
export const selectTodosCountByStatus = createSelector(
  [(state) => state.todos.items, (_, completed) => completed],
  (todos, completed) => {
    console.log(`[v0] selectTodosCountByStatus вычисляется для completed=${completed}`)
    return todos.filter((todo) => todo.completed === completed).length
  },
)

// пересчитывается только при изменении todos
export const getTodosStats = createSelector([getTodos], (todos) => {
  console.log("[v0] getTodosStats вычисляется заново")
  return {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  }
})
