import React from 'react'
import TaskCard from './TaskCard'

export default function TaskList({ tasks }) {
    const getTasks = tasks.map(task => <TaskCard key={task.id} task={task} />)
    
    return(
        <div className='task-list'>
            {getTasks}
        </div>
    )
}