import PropTypes from 'prop-types'

import Task from '../Task'
import './TaskList.css'

const TaskList = ({
  data = [],
  onDelete = () => {},
  onDone = () => {},
  onEdit = () => {},
  addItem = () => {},
  onTimer = () => {},
}) => {
  const elements = data.map((item) => (
    <Task
      {...item}
      key={item.id}
      id={item.id}
      onDelete={() => onDelete(item.id)}
      onDone={() => onDone(item.id)}
      onEdit={onEdit}
      addItem={() => addItem(item.id)}
      timer={item.timer}
      onTimer={(timer) => onTimer(timer, item.id)}
    />
  ))

  return <ul className="todo-list">{elements}</ul>
}

TaskList.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onDone: PropTypes.func,
  onEdit: PropTypes.func,
  addItem: PropTypes.func,
}

export default TaskList
