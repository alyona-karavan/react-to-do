import "./NewTaskForm.css"; 
import { Component } from "react";
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
    state = {
        label: ''
    }

    onChange = (e) => {
        this.setState( {
            label: e.target.value
        })
    }

    onSubmit =(e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState( {
            label:''
        })
    }
    
    render () {
        return (
        <form className="header" onSubmit = {this.onSubmit}>                                       
            <h1>todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                type="text"
                onChange = {this.onChange}
                value={this.state.label}
                />
        </form>
        )
    }
}

NewTaskForm.defaultProps = {
    addItem: () => {}
};

NewTaskForm.propTypes = {
    addItem: PropTypes.func
};
  
