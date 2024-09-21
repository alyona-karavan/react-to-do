import './Task.css'
import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

export default class Task extends Component {
  state = {
    label: this.props.name,
    editing: false,
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onEdit(this.props.id, this.state.label)
    this.setState({
      editing: false,
    })
  }

  render() {
    const { date, onDelete, onDone, done } = this.props

    let classNames = ''
    if (done) {
      classNames = 'completed'
    }
    if (this.state.editing) {
      classNames = 'editing'
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={done} onClick={onDone} onChange={() => {}} />
          <label onClick={onDone}>
            <span className="description">{this.state.label}</span>
            <span className="created">
              {' '}
              created {formatDistanceToNow(date, { includeSeconds: true, addSuffix: true })}{' '}
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => {
              this.setState({
                editing: true,
              })
            }}
          ></button>
          <button className="icon icon-destroy" onClick={onDelete}></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="text" className="edit" onChange={this.onChange} value={this.state.label} />
        </form>
      </li>
    )
  }
}

Task.defaultProps = {
  date: new Date(),
  name: 'No text',
  onDelete: () => {},
  onDone: () => {},
  onEdit: () => {},
  done: false,
  id: 123,
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
