import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, done: !t.done } : t
            )
        );
    };

    const editTask = (id, newText) => {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, text: newText } : t
            )
        );
    };

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, deleteTask, toggleTask, editTask }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => useContext(TaskContext);