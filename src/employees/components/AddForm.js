"use client"

import { useState } from "react"

// Простая форма добавления - всего 2 поля и 1 кнопка
function AddForm({ onAdd }) {
  const [name, setName] = useState("")
  const [job, setJob] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Проверяем что поля не пустые
    if (name.trim() && job.trim()) {
      onAdd({ name, job })
      // Очищаем форму после добавления
      setName("")
      setJob("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Добавить нового сотрудника</h3>
      <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />{" "}
      <input type="text" placeholder="Должность" value={job} onChange={(e) => setJob(e.target.value)} />{" "}
      <button type="submit">Добавить</button>
    </form>
  )
}

export default AddForm
