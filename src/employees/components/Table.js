function Table(props) {

  return (
    <div>
      {props.title && <h3>{props.title}</h3>}

      <table>
        <thead>
          <tr>
            {props.showNumbers && <th>№</th>}
            <th>Имя</th>
            <th>Должность</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((emp) => (
            <tr key={emp.number}>
              {props.showNumbers && <td>{emp.number}</td>}
              <td>{emp.name}</td>
              <td>{emp.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
