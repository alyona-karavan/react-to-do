import './Task.css'
import { useCallback, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import Timer from '../Timer'

const Task = ({
  date = new Date(),
  onDelete = () => {},
  onDone = () => {},
  done = false,
  id = Date.now(),
  timer,
  onTimer = () => {},
  name = 'No text',
  onEdit = () => {},
}) => {
  const [label, setLabel] = useState(name)
  const [edit, setEdit] = useState(false)

  const onChange = (e) => {
    setLabel(e.target.value)
  }

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onEdit(id, label)
      setEdit(false)
    },
    [id, label, onEdit]
  )

  const classNames = `${done ? 'completed' : ''} ${edit ? 'editing' : ''}`

  return (
    <li className={classNames}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={done} onClick={onDone} onChange={() => {}} />
        <label onClick={onDone}>
          <span className="title">{label}</span>
          <Timer
            timer={timer}
            onTimerUpdate={(timer) => {
              onTimer(timer, id)
            }}
          />
          <span className="created">
            {' '}
            created {formatDistanceToNow(date, { includeSeconds: true, addSuffix: true })}{' '}
          </span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            setEdit(true)
          }}
        ></button>
        <button className="icon icon-destroy" onClick={onDelete}></button>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" className="edit" onChange={onChange} value={label} />
      </form>
    </li>
  )
}

Task.propTypes = {
  date: PropTypes.object,
  name: PropTypes.string,
  onDelete: PropTypes.func,
  onDone: PropTypes.func,
  onEdit: PropTypes.func,
  done: PropTypes.bool,
  id: PropTypes.number,
}

export default Task
