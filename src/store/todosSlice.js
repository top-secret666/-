import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [
    { id: 1, text: "Паста Карбонара", completed: false },
    { id: 2, text: "Пицца Маргарита", completed: true },
    { id: 3, text: "Салат Цезарь", completed: false },
    { id: 4, text: "Стейк Рибай", completed: true },
    { id: 5, text: "Суши Филадельфия", completed: false },
    { id: 6, text: "Борщ с пампушками", completed: false },
    { id: 7, text: "Тирамису", completed: true },
    { id: 8, text: "Тако с курицей", completed: false },
    { id: 9, text: "Рамен с говядиной", completed: true },
    { id: 10, text: "Гуакамоле", completed: false },
    { id: 11, text: "Фалафель", completed: false },
    { id: 12, text: "Пад Тай", completed: true },
    { id: 13, text: "Мохито", completed: false },
    { id: 14, text: "Чизкейк Нью-Йорк", completed: true },
    { id: 15, text: "Бургер с картошкой", completed: false },
  ],
  filter: "all",
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
