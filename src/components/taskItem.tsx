// src/components/TaskItem.tsx
import React from 'react';
import { Task } from '../types';
import { BsCheck2 } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsBan } from "react-icons/bs";

interface TaskItemProps {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask }) => {
    return (
        <div>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            <span className='btn-grp'>
                <button className='complete-btn' onClick={() => toggleTask(task.id)}>
                    {task.completed ? <BsXLg /> : <BsCheck2 />}
                </button>
                <button onClick={() => deleteTask(task.id)}><BsBan /></button>
            </span>
        </div>
    );
};

export default TaskItem;
