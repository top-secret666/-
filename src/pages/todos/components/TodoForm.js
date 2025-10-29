"use client"

import { useState } from "react"

/**
 * TodoForm - Форма добавления новой задачи
 */
function TodoForm({ onSubmit }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onSubmit(text)
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавить новую задачу..."
        className="form-input"
      />
      <button type="submit" className="btn-primary">
        Добавить
      </button>
    </form>
  )
}

export default TodoForm
