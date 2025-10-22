"use client"

import { useEffect, useState } from "react"
import "./App.css"
import EmployeeAPI from "./api/service"
import Employees from "./employees/Employees"

function App() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    setEmployees(EmployeeAPI.all())
  }, [])

  const handleAdd = (newEmployee) => {
    const newEmployees = EmployeeAPI.add(newEmployee, employees)
    setEmployees(newEmployees)
  }

  const handleUpdate = (id, updatedData) => {
    const newEmployees = EmployeeAPI.update(id, updatedData, employees)
    setEmployees(newEmployees)
  }

  const handleDelete = (id) => {
    const newEmployees = EmployeeAPI.delete(id, employees)
    setEmployees(newEmployees)
  }

  return <Employees employees={employees} onAdd={handleAdd} onUpdate={handleUpdate} onDelete={handleDelete} />
}

export default App