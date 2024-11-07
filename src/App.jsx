import { useState, useMemo } from 'react'

import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

const App = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('all')

  const filteredItems = useMemo(() => {
    return data.filter(({ done }) => {
      const all = filter === 'all'
      const completed = filter === 'completed'
      return all ? true : completed ? done : !done
    })
  }, [data, filter])

  const createItem = (name, minutes, seconds) => ({
    name,
    id: Date.now(),
    done: false,
    date: new Date(),
    timer: {
      minutes: Number(minutes),
      seconds: Number(seconds),
      running: false,
      paused: false,
    },
  })

  const addItem = (text, minutes, seconds) => {
    const newItem = createItem(text, minutes, seconds)
    setData((prevData) => [...prevData, newItem])
  }

  const deleteItem = (id) => {
    setData((prevData) => prevData.filter((el) => el.id !== id))
  }

  const onToggleDone = (id) => {
    setData((prevData) => prevData.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  const onToggleEdit = (id, newText) => {
    setData((prevData) => prevData.map((item) => (item.id === id ? { ...item, name: newText } : item)))
  }

  const clearCompleted = () => {
    setData((prevState) => prevState.filter((element) => !element.done))
  }

  const changeFilter = (el) => {
    setFilter(el)
  }

  const onTimer = (timer, id) => {
    setData((prevData) => prevData.map((task) => (task.id === id ? { ...task, timer } : task)))
  }

  const doneCount = data.filter((el) => el.done).length
  const todoCount = data.length - doneCount

  return (
    <section className="todoapp">
      <NewTaskForm addItem={addItem} />
      <section className="main">
        <TaskList
          data={filteredItems}
          onDelete={deleteItem}
          onDone={onToggleDone}
          onEdit={onToggleEdit}
          onTimer={onTimer}
        />
        <Footer todo={todoCount} changeFilter={changeFilter} clearCompleted={clearCompleted} filter={filter} />
      </section>
    </section>
  )
}
export default App
