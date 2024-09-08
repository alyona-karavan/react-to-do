import './Task.css'

import { Component } from 'react';

export default class Task extends Component {

  render () {
    const { created, name, onDelete, onDone, onEdit, key, done, edit} = this.props;

    const taskTime = created;
    const now = new Date();

    let classNames = '';
    if (done) {
      classNames = 'completed';
    };
    if (edit) {
      classNames = 'editing';
    }

      return (
          <li key = {key} className={classNames}> 
              <div className="view">
                <input className="toggle" type="checkbox" onClick = {onDone} />
                <label onClick = {onDone}>
                  <span className="description">{name}</span>
                  <span className="created">created {(now - taskTime).toString()} ago</span>
                </label>
                <button className="icon icon-edit" onClick ={onEdit}></button>
                <button className="icon icon-destroy" onClick ={onDelete}></button>
              </div>
              <input type="text" className="edit" value="Editing task" />
          </li>                                    
      )
  }
}
