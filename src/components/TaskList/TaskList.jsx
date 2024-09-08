import Task from "../Task";

import "./TaskList.css";

export default function TaskList ({data, onDelete, onDone, onEdit, addItem}) {
    const elements = data.map((item) => {

      return(
      <Task {...item} onDelete = {() => { onDelete(item.key)}} onDone = { () => { onDone(item.key)}} onEdit = { () => { onEdit(item.key)}} addItem = { () => addItem(item.key)}/>)
    })

    return (
        <ul className="todo-list">
            {elements}
        </ul>                                     
    )
}
