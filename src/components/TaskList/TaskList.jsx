import Task from "../Task";
import { Component } from "react";
import "./TaskList.css";

export default class TaskList extends Component{ 
    render () {
    const {data, onDelete, onDone, onEdit, addItem} = this.props;
    const elements = data.map((item) => {

      return(
      <Task {...item} onDelete = {() => { onDelete(item.key)}} onDone = { () => { onDone(item.key)}} onEdit = { () => { onEdit(item.key)}} addItem = { () => addItem(item.key)}/>)
    })

    return (
        <ul className="todo-list">
            {elements}
        </ul>                                     
    )
}}
