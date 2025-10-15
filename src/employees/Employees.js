// src/components/employers.js
const EmployeeAPI = {
  employees: [
    { number: 1, name: "Ben Blocker", job: "Teacher" },
    { number: 2, name: "Dave Defender", job: "Student" },
    /* ... остальные сотрудники ... */
  ],
  all: function () { return this.employees; },
  get: function (id) { /* ... */ },
  delete: function (id) { /* ... */ },
  add: function (employee) { /* ... */ },
  update: function (employee) { /* ... */ }
};
export default EmployeeAPI;
