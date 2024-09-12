import './Task.css'
import { Component } from 'react';
import { formatDistanceToNow } from "date-fns";
import PropTypes from 'prop-types';

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
    this.props.onEdit(this.props.key, this.state.label);
  }

  render () {
    const { date, name, onDelete, onDone, onEdit,  done, edit, key} = this.props;

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
                  <span className="created"> created {formatDistanceToNow(date, {includeSeconds: true, addSuffix: true})} </span>
                </label>
                <button className="icon icon-edit" onClick ={onEdit}></button>
                <button className="icon icon-destroy" onClick ={onDelete}></button>
              </div>
              <form  onSubmit = {this.onSubmit}>
              <input type="text" className="edit" 
                onChange = {this.onChange}
                value={this.state.label} />
              </form>
          </li>                                    
      )
  }
}

Task.defaultProps = {
  date: new Date(),
  name: 'No text',
  onDelete: () => {},
  onDone: () => {},
  onEdit: () => {},
  done: false,
  edit: false,
  key: 123,
};

Task.propTypes = {
  date: PropTypes.object,
  name: PropTypes.string,
  onDelete: PropTypes.func,
  onDone: PropTypes.func,
  onEdit: PropTypes.func,
  done: PropTypes.bool,
  edit: PropTypes.bool,
  key: PropTypes.number,
};