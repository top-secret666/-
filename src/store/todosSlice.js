import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [
    { id: 1, text: "Изучить React", completed: false },
    { id: 2, text: "Изучить Redux", completed: true },
    { id: 3, text: "Изучить Reselect", completed: false },
    { id: 4, text: "Создать проект", completed: true },
    { id: 5, text: "Оптимизировать рендеринг", completed: false },
  ],
  filter: "all", // 'all', 'completed', 'active'
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      })
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((t) => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { addTodo, toggleTodo, setFilter } = todosSlice.actions
export default todosSlice.reducer
