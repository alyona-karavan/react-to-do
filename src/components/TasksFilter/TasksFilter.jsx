import './TasksFilter.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export default class TasksFilter extends Component {

  render () {
    
    const {filter, changeFilter} = this.props;

    return (
      <ul className="filters">
          <li>
            <button type="button" 
            onClick={() => changeFilter('all')} className={filter === 'all' ? 'selected' : null}>All</button>
          </li>
          <li>
            <button type="button"
            onClick={() => changeFilter('active')}
            className={filter === 'active' ? 'selected' : null}>Active</button>
          </li>
          <li>
            <button type="button"
            onClick={() => changeFilter('completed')}
            className={filter === 'completed' ? 'selected' : null}>Completed</button>
          </li>
      </ul>                                    
  )
  }
}

TasksFilter.defaultProps = {
  filter: 'all',
  changeFilter: () => {}
};

TasksFilter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func
};