import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import { Component } from "react";

export default class App extends Component {

    state = {
        data : [
            { className: 'editing', created: new Date(), description: 'Editing task', edit: true, key: 1},
            { className: 'completed', created: new Date(), description: 'Completed task',  edit: false, key: 2},
            { created: new Date(), description: 'Active task', edit: false, key: 3},
        ]
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
    
    render () {
        return (
            <section className="todoapp">
                <NewTaskForm />
                <section className="main">
                    <TaskList data = {this.state.data} onDelete = {this.deleteItem}/>
                    <Footer />
                </section>
            </section>
        )
    }
}