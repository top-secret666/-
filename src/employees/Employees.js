"use client"

import AddForm from "./components/AddForm"
import EditableTable from "./components/EditableTable"

const Employees = ({ employees, onAdd, onUpdate, onDelete }) => {
  return (
    <div>
      <h2>Управление сотрудниками</h2>

      <AddForm onAdd={onAdd} />
      <br />
      <EditableTable data={employees} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default Employees