function TodoStats({ stats, completedCount, activeCount }) {
  return (
    <div className="todo-stats">
      <div className="stat-item">
        <strong>Всего:</strong> {stats.total}
      </div>
      <div className="stat-item">
        <strong>Завершено:</strong> {completedCount}
      </div>
      <div className="stat-item">
        <strong>Активных:</strong> {activeCount}
      </div>
    </div>
  )
}

export default TodoStats
