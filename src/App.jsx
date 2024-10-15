import { Component } from 'react'

import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    data: [],
    filter: 'all',
  }

  createItem(name, minutes, seconds) {
    return {
      name,
      id: this.state.data.length + 1,
      done: false,
      date: new Date(),
      timer: {
        minutes: Number(minutes),
        seconds: Number(seconds),
        running: false,
        paused: false,
        startTime: 0,
      },
    }
  }

  addItem = (text, minutes, seconds) => {
    const newItem = this.createItem(text, minutes, seconds)

    this.setState(({ data }) => {
      const newArr = [...data, newItem]

      return {
        data: newArr,
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id)

      const before = data.slice(0, idx)
      const after = data.slice(idx + 1)
      const newArray = [...before, ...after]

      return {
        data: newArray,
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id)
      const oldItem = data[idx]
      const newItem = { ...oldItem, done: !oldItem.done }

      const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)]

      return {
        data: newArray,
      }
    })
  }

  onToggleEdit = (id, newText) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id)
      const oldItem = data[idx]
      const newItem = { ...oldItem, name: newText }

      const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)]

      return {
        data: newArray,
      }
    })
  }

  filteredItems = () => {
    const { data, filter } = this.state
    return data.filter(({ done }) => {
      const all = filter === 'all'
      const completed = filter === 'completed'
      return all ? true : completed ? done === true : done === false
    })
  }

  clearCompleted = () => {
    this.setState(({ data }) => ({ data: data.filter((element) => !element.done) }))
  }

  changeFilter = (el) => {
    this.setState({ filter: el })
  }

  onTimer = (timer, id) => {
    const updateTask = (task) => (task.id === id ? { ...task, timer } : task)
    const newData = this.state.data.map(updateTask)
    this.setState({ data: newData })
  }

  render() {
    const doneCount = this.state.data.filter((el) => el.done).length
    const todoCount = this.state.data.length - doneCount

    return (
      <section className="todoapp">
        <NewTaskForm addItem={this.addItem} />
        <section className="main">
          <TaskList
            data={this.filteredItems()}
            onDelete={this.deleteItem}
            onDone={this.onToggleDone}
            onEdit={this.onToggleEdit}
            onTimer={this.onTimer}
          />
          <Footer
            todo={todoCount}
            changeFilter={this.changeFilter}
            clearCompleted={this.clearCompleted}
            filter={this.state.filter}
          />
        </section>
      </section>
    )
  }
}
