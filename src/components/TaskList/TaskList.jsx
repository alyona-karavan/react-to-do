import Task from "../Task";
import { Component } from "react";
import "./TaskList.css";
import PropTypes from 'prop-types';

export default class TaskList extends Component{ 
    render () {
    const {data, onDelete, onDone, onEdit, addItem} = this.props;
    const elements = data.map((item) => {

      return(
      <Task {...item} key = {item.key} onDelete = {() => { onDelete(item.key)}} onDone = { () => { onDone(item.key)}} onEdit = { () => { onEdit(item.key)}} addItem = { () => addItem(item.key)}/>)
    })

    return (
        <ul className="todo-list">
            {elements}
        </ul>                                     
    )
}}

TaskList.defaultProps = {
    data: [],
    onDelete: () => {},
    onDone: () => {},
    onEdit: () => {},
    addItem: () => {}
};

TaskList.propTypes = {
    data: PropTypes.array,
    onDelete: PropTypes.func,
    onDone: PropTypes.func,
    onEdit: PropTypes.func,
    addItem: PropTypes.func,
};
  