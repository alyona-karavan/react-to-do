import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter'
import './Footer.css'

const Footer = ({ todo = 0, clearCompleted = () => {}, changeFilter = () => {}, filter = 'all' }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todo} items left</span>
      <TasksFilter filter={filter} changeFilter={changeFilter} />
      <button className="clear-completed" type="button" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  todo: PropTypes.number,
  clearCompleted: PropTypes.func,
  changeFilter: PropTypes.func,
  filter: PropTypes.string,
}

export default Footer
