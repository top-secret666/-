"use client"

import Cell from "./Cell"

// Компонент таблицы сотрудников
// Делает ОДНО дело: показывает список сотрудников с возможностью редактирования и удаления
function EmployeeTable({ employees, onUpdate, onDelete }) {
  const handleCellUpdate = (id, field, newValue) => {
    console.log("Обновляем поле:", field, "на:", newValue, "для id:", id)
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
              <Cell
                value={employee.name}
                onSave={(newValue) => handleCellUpdate(employee.id, "name", newValue)}
              />
            </td>
            <td>
              <Cell
                value={employee.job}
                onSave={(newValue) => handleCellUpdate(employee.id, "job", newValue)}
              />
            </td>
            <td>
              <button
                onClick={() => onDelete(employee.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#ff4444",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
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

export default EmployeeTable
