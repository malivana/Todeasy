import React from 'react'

import Task from '../../Task/Task'

import './TaskPage.sass';

function TaskPage({taskData, todoData}) {
    return(
        <ul className="task-list">
            {
                taskData.map(task => {
                    return (
                        <Task 
                            key={task.id}
                            task={task}
                            todoData={todoData}
                        />
                    )
                })
            }
        </ul>
    )
}

export default TaskPage;