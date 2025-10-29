import { useCallback, useEffect, useState } from "react"
import { Provider } from "react-redux"
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import EmployeeAPI from "./api/service"
import "./App.css"
import Employees from "./pages/employees/Employees"
import LoginPage from "./pages/login/LoginPage"
import TodosPage from "./pages/todos/TodosPage"
import { store } from "./store/store"

function App() {
  const [employees, setEmployees] = useState([])
  const [history, setHistory] = useState([])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees")
    const initialEmployees = savedEmployees ? JSON.parse(savedEmployees) : EmployeeAPI.all()
    setEmployees(initialEmployees)
    setHistory([initialEmployees])
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized && employees.length > 0) {
      localStorage.setItem("employees", JSON.stringify(employees))
    }
  }, [employees, isInitialized])

  const handleUndo = useCallback(() => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      setHistory(newHistory)
      setEmployees(newHistory[newHistory.length - 1])
    }
  }, [history])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "z" || e.key === "Z")) {
        e.preventDefault()
        handleUndo()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleUndo])

  const updateEmployeesWithHistory = (newEmployees) => {
    setEmployees(newEmployees)
    setHistory((prev) => [...prev, newEmployees])
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
    <Provider store={store}>
      <Router>
        <div className="App">
          <nav style={{ padding: "20px", backgroundColor: "#333", color: "white" }}>
            <Link to="/login" style={{ color: "white", marginRight: "20px", textDecoration: "none" }}>
              Логин
            </Link>
            <Link to="/employees" style={{ color: "white", marginRight: "20px", textDecoration: "none" }}>
              Сотрудники
            </Link>
            <Link to="/todos" style={{ color: "white", textDecoration: "none" }}>
              Задачи (Reselect Demo)
            </Link>
          </nav>

          <div style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/todos" element={<TodosPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App
