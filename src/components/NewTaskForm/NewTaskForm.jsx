import './NewTaskForm.css'
import { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  state = {
    label: '',
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.label)
    this.setState({
      label: '',
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.onSubmit(event)
    }
  }

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit} onKeyDown={this.handleKeyPress}>
        <h1>todos</h1>
        <input className="new-todo" placeholder="Task" autoFocus onChange={this.onChange} value={this.state.label} />
        <input className="new-todo-form__timer" placeholder="Min" autoFocus />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
      </form>
    )
  }
}

NewTaskForm.defaultProps = {
  addItem: () => {},
}

NewTaskForm.propTypes = {
  addItem: PropTypes.func,
}
