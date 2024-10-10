// src/App.tsx
import React from 'react';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import ThemeToggle from './components/themeToggle';
import { TaskProvider } from './context/taskContext';
import { ThemeProvider, useThemeContext } from './context/themeContext';
import './App.css'; // Import the styles

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <ThemedContainer />
      </TaskProvider>
    </ThemeProvider>
  );
};

const ThemedContainer: React.FC = () => {
  const { theme } = useThemeContext(); // Get the current theme

  return (
    <div className={`container ${theme}`}> {/* Apply the theme class */}
      <h1>Taskify</h1>
      <ThemeToggle />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
