import './NewTaskForm.css'
import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

const NewTaskForm = ({ addItem = () => {} }) => {
  const [label, setLabel] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const onChangeLabel = useCallback((e) => {
    setLabel(e.target.value)
  }, [])

  const onChangeMin = useCallback((e) => {
    const value = e.target.value
    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 59)) {
      setMinutes(value)
    } else {
      alert('Пожалуйста, введите корректные значения для минут (от 0 до 59)')
    }
  }, [])

  const onChangeSec = useCallback((e) => {
    const value = e.target.value
    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 59)) {
      setSeconds(value)
    } else {
      alert('Пожалуйста, введите корректные значения секунд (от 0 до 59)')
    }
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (label && minutes && seconds) {
        addItem(label, minutes, seconds)
        setLabel('')
        setMinutes('')
        setSeconds('')
      } else {
        alert('Пожалуйста, заполните все поля')
      }
    },
    [addItem, label, minutes, seconds]
  )

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSubmit(event)
    }
  }

  return (
    <form className="new-todo-form" onSubmit={onSubmit} onKeyDown={handleKeyPress}>
      <h1>todos</h1>
      <input required className="new-todo" placeholder="Task" autoFocus onChange={onChangeLabel} value={label} />
      <input required className="new-todo-form__timer" placeholder="Min" value={minutes} onChange={onChangeMin} />
      <input required className="new-todo-form__timer" placeholder="Sec" value={seconds} onChange={onChangeSec} />
    </form>
  )
}

NewTaskForm.propTypes = {
  addItem: PropTypes.func,
}

export default NewTaskForm
