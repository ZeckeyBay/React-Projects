// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTask = (name) => {
    const newTask = { id: Date.now(), name: name, done: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const numberCompleted = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  const getMessage = () => {
    const percentage = (numberCompleted / numberTotal) * 100;
    if (percentage === 0) {
      return "Try to do at least one :(";
    }
    if (percentage === 100) {
      return "Well done! Go get some rest today :)";
    }
    return "Keep it going ^^";
  };

  const renameTask = (taskId, newName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };

  return (
    <main className="max-w-[350px] m-auto">
      <h1 className="flex items-center justify-center my-5 text-3xl">
        {numberCompleted}/{numberTotal} Complete
      </h1>
      <h2 className="flex items-center justify-center my-5 text-xl">
        {getMessage()}
      </h2>
      <Form onAdd={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          done={task.done}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onRename={renameTask}
        />
      ))}
    </main>
  );
}

export default App;
