import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import { Component } from "react";

export default class App extends Component {

    const k =length;
    state = {
        data : [],
        filter: 'all',
    };

    createItem (name) {
        return {
            name,
            key: this.state.data.length + 1,
            edit: false,
            done: false,
            date: new Date(),
        }
    }

    

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

    addItem = (text) => {
        const newItem = this.createItem(text);

        this.setState( ({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            };
        });
    };

    toggleProperty(arr, key, propName) {
        const idx = arr.findIndex((el) => el.key === key);
            const oldItem = arr[idx];
            const newItem = { ...oldItem, [propName]: !oldItem[propName]};

            return [ ...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }
    
    onDone = (key) => {
        this.setState( ({data}) => {
            return {
                data: this.toggleProperty(data, key, 'done')
            };
        });
    };

    onEdit = (key) => {
        this.setState( ({data}) => {
            return {
                data: this.toggleProperty(data, key, 'edit')
            };
        });
    };

    filteredItems = () =>  {
        const { data, filter } = this.state;
        return data.filter(({ done }) => {
          const all = filter === 'all';
          const completed = filter === 'done';
          return all ? true : completed ? done === true : done === false;
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

        // const doneItems = this.state.data.filter( (el) => el.done);
        // const todoItems = this.state.data.filter( (el) => !el.done);
        // const allItems = this.state.data;

        return (
            <section className="todoapp">
                <NewTaskForm 
                addItem ={this.addItem}/>
                <section className="main">
                    <TaskList 
                    data = {this.state.data} 
                    onDelete = {this.deleteItem} 
                    onDone = {this.onDone} 
                    onEdit ={this.onEdit} />
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