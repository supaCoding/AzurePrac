// src/context/TaskContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Task } from '../types';

interface TaskContextType {
    tasks: Task[];
    addTask: (title: string) => void;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [nextId, setNextId] = useState(1);

    const addTask = (title: string) => {
        setTasks([...tasks, { id: nextId, title, completed: false }]);
        setNextId(nextId + 1);
    };

    const toggleTask = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};
