import React, { useState } from "react";

function ToDoLIst() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewtask] = useState("");

  // Update the newTask state when the input changes
  function handleUpdate(e) {
    setNewtask(e.target.value);
  }

  // Add the new task to the list
  function add() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewtask(""); // Clear the input after adding the task
    }
  }

  // Delete a task by index
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function up(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function down(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div className="in">
        <input
          className="input"
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={handleUpdate}
        />
        <button className="add-button" onClick={add}>
          Add
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move" onClick={() => up(index)}>
                👆
              </button>
              <button
                className="move"
                onClick={() => down(index)}
                disabled={index === tasks.length - 1}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoLIst;
