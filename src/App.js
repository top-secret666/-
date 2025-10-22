"use client"

import { useEffect, useState } from "react"
import "./App.css"
import EmployeeAPI from "./api/service"
import Employees from "./employees/Employees"

function App() {
  const [employees, setEmployees] = useState([])
  const [history, setHistory] = useState([])

  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees")
    const initialEmployees = savedEmployees ? JSON.parse(savedEmployees) : EmployeeAPI.all()
    setEmployees(initialEmployees)
    setHistory([initialEmployees])
  }, [])

  useEffect(() => {
    if (employees.length > 0 || localStorage.getItem("employees")) {
      localStorage.setItem("employees", JSON.stringify(employees))
    }
  }, [employees])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "z" || e.key === "Z")) {
        e.preventDefault()
        handleUndo()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [history])

  const updateEmployeesWithHistory = (newEmployees) => {
    setEmployees(newEmployees)
    setHistory((prev) => [...prev, newEmployees])
  }

  const handleUndo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      setHistory(newHistory)
      setEmployees(newHistory[newHistory.length - 1])
    }
  }

  const handleAdd = (newEmployee) => {
    const newEmployees = EmployeeAPI.add(newEmployee, employees)
    updateEmployeesWithHistory(newEmployees)
  }

  const handleUpdate = (id, updatedData) => {
    const newEmployees = EmployeeAPI.update(id, updatedData, employees)
    updateEmployeesWithHistory(newEmployees)
  }

  const handleDelete = (id) => {
    const newEmployees = EmployeeAPI.delete(id, employees)
    updateEmployeesWithHistory(newEmployees)
  }

  const handleResetAll = () => {
    const initialEmployees = EmployeeAPI.all()
    setEmployees(initialEmployees)
    setHistory([initialEmployees])
    localStorage.removeItem("employees")
  }

  return (
    <Employees
      employees={employees}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      onResetAll={handleResetAll}
    />
  )
}

export default App
