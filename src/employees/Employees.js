import Form from "./components/Form"
import Table from "./components/Table"

const Employees = ({ employees }) => {
  return (
    <div>
      <h2>Сотрудники</h2>

      <Form title="Добавить нового сотрудника" buttonText="Добавить" showSalary={true} />

      <Table data={employees} showNumbers={true} title="Список всех сотрудников" />
    </div>
  )
}

export default Employees
