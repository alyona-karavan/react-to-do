import './Task.css'

import { Component } from 'react';

export default class Task extends Component {
  
  state = {
    label: this.props.name
  }

  onChange = (e) => {
    this.setState( {
        label: e.target.value
    })
  }

  onSubmit =(e) => {
    e.preventDefault();
    const {
      onEdit,
      data: { key },
    } = this.props;
    onEdit(key, this.state.label);
    
  }

  render () {
    const { created, name, onDelete, onDone, onEdit,  done, edit, key} = this.props;

    const taskTime = created;
    const now = new Date();

    let checked;
    let classNames = '';
    if (done) {
      classNames = 'completed';
      checked = true;
    };
    if (edit) {
      classNames = 'editing';
    }

      return (
          <li key = {key} className={classNames}> 
              <div className="view" >
                <input className="toggle" type="checkbox"  checked = {checked} onClick = {onDone} />
                <label onClick = {onDone}>
                  <span 
                  className="description" 
                  >{name}</span>
                  <span className="created">created {(now - taskTime).toString()} ago</span>
                </label>
                <button className="icon icon-edit" onClick ={onEdit}></button>
                <button className="icon icon-destroy" onClick ={onDelete}></button>
              </div>
              <input type="text" className="edit" 
                onChange = {this.onChange}
                value={this.state.label} />
          </li>                                    
      )
  }
}
