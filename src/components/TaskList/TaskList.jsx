import PropTypes from 'prop-types'
import { Component } from 'react'

import Task from '../Task'
import './TaskList.css'

export default class TaskList extends Component {
  render() {
    const { data, onDelete, onDone, onEdit, addItem } = this.props
    const elements = data.map((item) => {
      return (
        <Task
          {...item}
          key={item.id}
          id={item.id}
          onDelete={() => {
            onDelete(item.id)
          }}
          onDone={() => {
            onDone(item.id)
          }}
          onEdit={() => {
            onEdit(item.id)
          }}
          addItem={() => addItem(item.id)}
        />
      )
    })

    return <ul className="todo-list">{elements}</ul>
  }
}

TaskList.defaultProps = {
  data: [],
  onDelete: () => {},
  onDone: () => {},
  onEdit: () => {},
  addItem: () => {},
}

TaskList.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onDone: PropTypes.func,
  onEdit: PropTypes.func,
  addItem: PropTypes.func,
}
