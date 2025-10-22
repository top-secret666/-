import { useState } from "react"

function Form({ onAdd }) {
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim() && job.trim()) {
    onAdd({ name, job })
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

export default Form
