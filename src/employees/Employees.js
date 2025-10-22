import Form from "./components/Form"
import Table from "./components/Table"

function Employees({ employees, onAdd, onUpdate, onDelete, onResetAll }) {
  return (
    <div>
      <h2>Управление сотрудниками</h2>

      <Form onAdd={onAdd} />

      <br />

      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={onResetAll}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Сбросить все данные
        </button>
        <span style={{ marginLeft: "10px", fontSize: "14px", color: "#666" }}>
          (Ctrl+Z для отмены последнего действия)
        </span>
      </div>

      <Table employees={employees} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default Employees
