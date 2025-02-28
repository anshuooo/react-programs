import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  // Toggle Task Completion
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <h2>To-Do App</h2>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>Add</button>
      </div>
      <ul style={styles.list}>
        {tasks.map((t, index) => (
          <li key={index} style={{ ...styles.task, textDecoration: t.completed ? "line-through" : "none" }}>
            {t.text}
            <div>
              <button onClick={() => toggleTask(index)} style={styles.completeButton}>
                {t.completed ? "Undo" : "Done"}
              </button>
              <button onClick={() => deleteTask(index)} style={styles.deleteButton}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  container: { textAlign: "center", maxWidth: "400px", margin: "auto", fontFamily: "Arial" },
  input: { padding: "10px", marginRight: "10px", width: "60%" },
  button: { padding: "10px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" },
  list: { listStyle: "none", padding: 0 },
  task: { display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #ddd" },
  completeButton: { marginRight: "5px", backgroundColor: "green", color: "white", border: "none", cursor: "pointer", padding: "5px" },
  deleteButton: { backgroundColor: "red", color: "white", border: "none", cursor: "pointer", padding: "5px" }
};

export default TodoApp;
