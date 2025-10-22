const EmployeeAPI = {
  employees: [
    { id: 1, name: "Ben Blocker", job: "Teacher" },
    { id: 2, name: "Dave Defender", job: "Student" },
    { id: 3, name: "Sam Sweeper", job: "Teacher" },
    { id: 4, name: "Matt Midfielder", job: "Student" },
    { id: 5, name: "William Winger", job: "Student" },
    { id: 6, name: "Fillipe Forward", job: "Rector" },
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