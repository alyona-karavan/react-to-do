import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <section className="todoapp">
            <NewTaskForm />
            <section className="main">
                <TaskList />
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
