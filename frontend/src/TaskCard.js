import React from 'react'

export default function TaskCard({ task, removeTask }) {
    return (
        <div className={task.urgency ? 'task-card urgent' : 'task-card'}>
            <h3>{task.description}</h3>
            <p>{task.length} minutes</p>
            <button onClick={() => removeTask(task)}>Task Completed</button>
        </div>
    )
}