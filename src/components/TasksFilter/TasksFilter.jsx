import './TasksFilter.css';

import { Component } from 'react';

export default class TasksFilter extends Component {

  render () {
    
    const {filter, changeFilter} = this.props;

    return (
      <ul className="filters">
          <li>
            <button type="button" 
            onClick={() => changeFilter('all')} className={filter === 'All' ? 'selected' : null}>All</button>
          </li>
          <li>
            <button type="button"
            onClick={() => changeFilter('Active')}
            className={filter === 'Active' ? 'selected' : null}>Active</button>
          </li>
          <li>
            <button type="button"
            onClick={() => changeFilter('done')}
            className={filter === 'done' ? 'selected' : null}>Completed</button>
          </li>
      </ul>                                    
  )
  }
}