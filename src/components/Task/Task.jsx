import './Task.css'

import { Component } from 'react';

export default class Task extends Component {

  onItemClick = () => {
    this.setState( (state) => {
      return {
        done: !state.done
      }
    });
  };

  editButton =() => {
    this.setState( (state) => { 
      return {
      edit: !state.edit
      }
    });
  };
  
  state = {
    done: false,
    edit: false,
  };

  render () {
    const { created, description, onDelete, key} = this.props;
    const {done, edit} = this.state;
    
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
                <input className="toggle" type="checkbox" onClick = {this.onItemClick}/>
                <label onClick = {this.onItemClick}>
                  <span className="description">{description}</span>
                  <span className="created">created {(now - taskTime).toString()} ago</span>
                </label>
                <button className="icon icon-edit" onClick ={this.editButton}></button>
                <button className="icon icon-destroy" onClick ={onDelete}></button>
              </div>
              <input type="text" className="edit" value="Editing task" />
          </li>                                    
      )
  }
}
