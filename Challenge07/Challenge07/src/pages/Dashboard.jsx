import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
    const { tasks, addTask, editTask, deleteTask, toggleTask } = useTaskContext();
    const { logout } = useAuth();

    const [text, setText] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    return (
        <div className="dashboard">

            <div className="header">
                <h2>Mis Tareas 📝</h2>
                <button onClick={logout}>Logout</button>
            </div>

            <div className="task-input">
                <input
                    placeholder="Añade una nueva tarea..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={() => {
                    addTask(text);
                    setText("");
                }}>
                    Añadir
                </button>
            </div>

            {tasks.length === 0 ? (
                <p>No hay tareas aún 👀</p>
            ) : (
                tasks.map((task) => (
                    <div className="task-card" key={task.id}>

                        {editingId === task.id ? (
                            <input
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <div className="task-left">
                                <input
                                    type="checkbox"
                                    checked={task.done}
                                    onChange={() => toggleTask(task.id)}
                                />

                                <span className={task.done ? "done" : ""}>
                                    {task.text}
                                </span>
                            </div>
                        )}

                        <div className="actions">
                            {editingId === task.id ? (
                                <button
                                    className="edit"
                                    onClick={() => {
                                        editTask(task.id, editText);
                                        setEditingId(null);
                                    }}
                                >
                                    Guardar
                                </button>
                            ) : (
                                <button
                                    className="edit"
                                    onClick={() => {
                                        setEditingId(task.id);
                                        setEditText(task.text);
                                    }}
                                >
                                    Editar
                                </button>
                            )}

                            <button
                                className="delete"
                                onClick={() => deleteTask(task.id)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}