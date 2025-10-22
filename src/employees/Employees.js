"use client"

import Form from "./components/Form"
import Table from "./components/Table"

function Employees({ employees, onAdd, onUpdate, onDelete }) {
  return (
    <div>
      <h2>Управление сотрудниками</h2>

      <Form onAdd={onAdd} />

      <br />

      <Table employees={employees} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default Employees
