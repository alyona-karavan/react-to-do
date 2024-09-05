import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

export default function App() {

    const data = [
        { className: 'editing', created: new Date(), description: 'Editing task'},
        { className: 'completed', created: new Date(), description: 'Completed task'},
        {created: new Date(), description: 'Active task'},
    ];

    return (
        <section className="todoapp">
            <NewTaskForm />
            <section className="main">
                <TaskList data = {data}/>
                <Footer />
            </section>
        </section>
    )
}



/* 
<header class="header">                                          => NewTaskForm
    <h1>todos</h1>
    <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
</header>


<section class="main">

    <ul class="todo-list">                                        => TaskList
        <li class="completed">                                    => Task
        <li class="editing">
        <li>

    <footer class="footer">                                      => Footer
        <span class="todo-count">1 items left</span>
        <ul class="filters">                                    => TasksFilters
            <li><button class="selected">All</button></li>
            <li><button>Active</button></li>
            <li><button>Completed</button></li>
        <button class="clear-completed">Clear completed</button>

</section> */
