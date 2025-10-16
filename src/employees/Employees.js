import Table from './Table';

const Employees = () => {
  return (
    <div>
      <h2>Сотрудники</h2>
      <Table data={employeesData} />
    </div>
  );
}