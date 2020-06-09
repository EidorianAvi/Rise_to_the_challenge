import React from 'react'
import TaskCard from './TaskCard'

export default function TaskList({ tasks, removeTask }) {
    const getTasks = tasks.map(task => <TaskCard key={task.id} task={task} removeTask={removeTask} />)
    
    return(
        <div>
            <div>
                <h2>Tasks</h2>
            </div>
            <div className='task-list'>
                {getTasks}
            </div>
        </div>
    )
}