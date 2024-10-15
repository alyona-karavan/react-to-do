import './NewTaskForm.css'
import { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  state = {
    label: '',
    minutes: '',
    seconds: '',
  }

  onChangeLabel = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onChangeMin = (e) => {
    const value = e.target.value
    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 59)) {
      this.setState({
        minutes: value,
      })
    } else {
      alert('Пожалуйста, введите корректные значения для минут (от 0 до 59)')
    }
  }

  onChangeSec = (e) => {
    const value = e.target.value
    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 59)) {
      this.setState({
        seconds: value,
      })
    } else {
      alert('Пожалуйста, введите корректные значения секунд (от 0 до 59)')
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.label && this.state.minutes && this.state.seconds) {
      this.props.addItem(this.state.label, this.state.minutes, this.state.seconds)
      this.setState({
        label: '',
        minutes: '',
        seconds: '',
      })
    } else {
      alert('Пожалуйста, заполните все поля')
    }
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
        <input
          required
          className="new-todo"
          placeholder="Task"
          autoFocus
          onChange={this.onChangeLabel}
          value={this.state.label}
        />
        <input
          required
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          value={this.state.minutes}
          onChange={this.onChangeMin}
        />
        <input
          required
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          value={this.state.seconds}
          onChange={this.onChangeSec}
        />
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
