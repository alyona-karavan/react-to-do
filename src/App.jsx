import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import { Component } from "react";

export default class App extends Component {

    state = {
        data : [],
        filter: 'all',
    };

    createItem (name) {
        return {
            name,
            key: this.state.data.length + 1,
            done: false,
            edit: false,
            date: new Date(),
        }
    }

    addItem = (text) => {
        const newItem = this.createItem(text);

        this.setState( ({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            };
        });
    };
    

    deleteItem = (key) => {
        this.setState ( ({data}) => {
            const idx = data.findIndex((el) => el.key === key);

            const before = data.slice(0, idx);
            const after = data.slice(idx + 1);
            const newArray = [...before, ...after];

            return {
                data: newArray
            }
        })
    }

    onToggleDone = (key) => {
        this.setState( ({data}) => {
            const idx = data.findIndex((el) => el.key === key);
            const oldItem = data[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newArray = [...data.slice(0, idx), 
                            newItem,
                            ...data.slice(idx + 1)];

            return {
                data: newArray
            };
        });
    };

    onToggleEdit = (key, newText) => {
        this.setState( ({data}) => {
            const idx = data.findIndex((el) => el.key === key);
            const oldItem = data[idx];
            const newItem = {...oldItem, name: newText, edit: !oldItem.edit};

            const newArray = [...data.slice(0, idx), 
                            newItem,
                            ...data.slice(idx + 1)];

            return {
                data: newArray
            };
        });
      }

    filteredItems = () =>  {
        const { data, filter } = this.state;
        return data.filter(({done}) => {
          const all = filter === 'all';
          const completed = filter === 'completed';
          return all ? true : completed ? done === true : done === false ;
        });
      }

      clearCompleted = () => {
        this.setState(({ data }) => ({ data: data.filter((element) => !element.done) }));
      }
    
      changeFilter = (el) => {
        this.setState({ filter: el });
      }

    
    render () {
        const doneCount = this.state.data.filter( (el) => el.done).length;
        const todoCount = this.state.data.length - doneCount;

        return (
            <section className="todoapp">
                <NewTaskForm 
                addItem ={this.addItem}/>
                <section className="main">
                    <TaskList 
                    data = {this.filteredItems()} 
                    onDelete = {this.deleteItem} 
                    onDone = {this.onToggleDone} 
                    onEdit ={this.onToggleEdit} />
                    <Footer 
                    todo = {todoCount} 
                    changeFilter={this.changeFilter}
                    clearCompleted={this.clearCompleted}
                    filter={this.state.filter}/>
                </section>
            </section>
        )
    }
}