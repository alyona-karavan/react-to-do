import './TasksFilter.css'
import PropTypes from 'prop-types'

const TasksFilter = ({ filter = 'all', changeFilter = () => {} }) => {
  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={() => changeFilter('all')} className={filter === 'all' ? 'selected' : null}>
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => changeFilter('active')}
          className={filter === 'active' ? 'selected' : null}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => changeFilter('completed')}
          className={filter === 'completed' ? 'selected' : null}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

TasksFilter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
}

export default TasksFilter
