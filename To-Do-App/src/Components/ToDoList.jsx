import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Code"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((task) => [...task, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((element, i) => i !== index);
    setTasks(updateTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
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
    <div className="my-5">
      <h1 className="flex justify-center items-center my-5">To-Do-List</h1>
      <div className="flex justify-center items-center my-5">
        <input
          className="mx-2 px-6 py-1 border-2 rounded-full border-black "
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className=" border-2 px-4 py-1 rounded-full border-gray-500 bg-green-600 hover:bg-white hover:border-green-500 hover:text-green-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul className="flex flex-col justify-center items-center">
        {tasks.map((task, index) => (
          <li
            className="flex items-center my-2 border-2 py-3 px-5 border-blue-500 "
            key={index}
          >
            <span className="">{task}</span>
            <button
              className="ml-5 border-2 px-3 border-red-500 rounded-full hover:bg-red-500 hover:text-white"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="ml-5 border-2 px-3 rounded-full border-fuchsia-500 hover:bg-fuchsia-500 hover:text-white"
              onClick={() => moveTaskUp(index)}
            >
              UP
            </button>
            <button
              className="ml-1 border-2 px-3 rounded-full border-fuchsia-500 hover:bg-fuchsia-500 hover:text-white"
              onClick={() => moveTaskDown(index)}
            >
              DOWN
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
