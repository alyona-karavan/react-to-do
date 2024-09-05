import './Task.css'

export default function Task ({className, created, description}) {

  const taskTime = created;
  const now = new Date();

    return (
        <li className={className}> 
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">{description}</span>
                <span className="created">created {(now - taskTime).toString()} ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" value="Editing task" />
        </li>                                    
    )
}

/* 3 состояния компонента таск
    <li class="completed">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>
                <span class="description">Completed task</span>
                <span class="created">created 17 seconds ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
          </li>
          <li class="editing">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>
                <span class="description">Editing task</span>
                <span class="created">created 5 minutes ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
            <input type="text" class="edit" value="Editing task" />
          </li>
          <li>
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>
                <span class="description">Active task</span>
                <span class="created">created 5 minutes ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
          </li> */