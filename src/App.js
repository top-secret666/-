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

  return <Employees employees={employees} />
}

export default App
