// src/components/TaskForm.tsx
import React, { useState } from 'react';
import { useTaskContext } from '../context/taskContext';

const TaskForm: React.FC = () => {
    const { addTask } = useTaskContext();
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        addTask(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
            />
            <button className="add-task" type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
