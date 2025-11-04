const EmployeeAPI = {
  employees: [
    { id: 1, name: "McDonald's", price: "500 ₽" },
    { id: 2, name: "KFC", price: "600 ₽" },
    { id: 3, name: "Burger King", price: "550 ₽" },
    { id: 4, name: "Subway", price: "400 ₽" },
    { id: 5, name: "Starbucks", price: "450 ₽" },
    { id: 6, name: "Pizza Hut", price: "800 ₽" },
  ],

  all: function () {
    return this.employees
  },

  get: function (id) {
    return this.employees.find((emp) => emp.id === id)
  },

  delete: function (id, currentEmployees) {
    return currentEmployees.filter((emp) => emp.id !== id)
  },

  add: function (employee, currentEmployees) {
    const maxId = Math.max(...currentEmployees.map((e) => e.id), 0)
    const newEmployee = { ...employee, id: maxId + 1 }
    return [...currentEmployees, newEmployee]
  },

  update: function (id, updatedData, currentEmployees) {
    return currentEmployees.map((emp) =>
      emp.id === id ? { ...emp, ...updatedData } : emp
    )
  },
}

export default EmployeeAPI