import { useEffect, useState } from 'react';
import './App.css';
import EmployeeAPI from './employees';

export default App;

function App() {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    setEmployees(EmployeeAPI.all());
  }, []);

return <EmployeesView employees={employees} />;
}



