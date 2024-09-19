import { Component } from 'react'
import PropTypes from 'prop-types'
import TasksFilter from '../TasksFilter'
import './Footer.css'

export default class Footer extends Component {
  render() {
    const { todo, clearCompleted, changeFilter, filter } = this.props

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
}

Footer.defaultProps = {
  todo: 0,
  clearCompleted: () => {},
  changeFilter: () => {},
  filter: 'all',
}

Footer.propTypes = {
  todo: PropTypes.number,
  clearCompleted: PropTypes.func,
  changeFilter: PropTypes.func,
  filter: PropTypes.string,
}
