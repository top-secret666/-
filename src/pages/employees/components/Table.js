import { useState } from "react"

function Cell({ value, onSave }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(value)

  const handleClick = () => {
    setIsEditing(true)
  }

  const handleBlur = () => {
    setIsEditing(false)
    if (editValue !== value) {
      onSave(editValue)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleBlur()
    }
    if (e.key === "Escape") {
      setEditValue(value)
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
        style={{ width: "100%", padding: "4px", boxSizing: "border-box" }}
      />
    )
  }

  return (
    <span onClick={handleClick} style={{ cursor: "pointer", display: "block", padding: "4px" }}>
      {value}
    </span>
  )
}

function Table({ employees, onUpdate, onDelete }) {
  const handleCellUpdate = (id, field, newValue) => {
    onUpdate(id, { [field]: newValue })
  }

  return (
    <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>№</th>
          <th>Имя (клик для редактирования)</th>
          <th>Должность (клик для редактирования)</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={employee.id}>
            <td>{index + 1}</td>
            <td>
              <Cell value={employee.name} onSave={(newValue) => handleCellUpdate(employee.id, "name", newValue)} />
            </td>
            <td>
              <Cell value={employee.job} onSave={(newValue) => handleCellUpdate(employee.id, "job", newValue)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(employee.id)}
                style={{ padding: "5px 10px", backgroundColor: "#ff4444", color: "white", border: "none" }}
              >
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table