import Table from "./components/Table"

const Employees = ({ employees }) => {
  return (
    <div>
      <h2>Сотрудники</h2>
      <Table data={employees} />
    </div>
  )
}

export default Employees
