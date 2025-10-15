import EmployeeAPI from '../services/employeeService';
import Table from './Table';

const Employees = () => {
  const employeesData = EmployeeAPI.all();

  return (
    <div>
      <h2>Сотрудники</h2>
      <Table data={employeesData} />
    </div>
  );
};

export default Employees;