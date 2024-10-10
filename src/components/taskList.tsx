// src/components/TaskList.tsx
import React from 'react';
import { useTaskContext } from '../context/taskContext';
import TaskItem from './taskItem';

const TaskList: React.FC = () => {
    const { tasks, toggleTask, deleteTask } = useTaskContext();

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
        </div>
    );
};

export default TaskList;
