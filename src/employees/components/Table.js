function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Имя</th>
          <th>Должность</th>
        </tr>
      </thead>
      <tbody>
        {data.map((emp) => (
          <tr key={emp.number}>
            <td>{emp.number}</td>
            <td>{emp.name}</td>
            <td>{emp.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
