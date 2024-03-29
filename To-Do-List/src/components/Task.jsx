import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import { FaTrash } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";

const Task = ({ id, name, done, onToggle, onDelete, onRename }) => {
  const [editedName, setEditedName] = useState(name);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setEditedName(name);
  }, [name]);

  const handleToggle = () => {
    onToggle(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleSubmit = () => {
    onRename(id, editedName);
    setEditing(false);

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const updatedTasks = existingTasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: editedName };
      }
      return task;
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
      e.target.blur();
    }
  };

  return (
    <div
      className={`flex items-center mx-2 my-3 p-2 rounded-lg ${
        done ? "bg-gray-800 line-through" : "bg-slate-700"
      }`}
    >
      <Checkbox taskId={id} defaultChecked={done} onChange={handleToggle} />
      {editing ? (
        <input
          type="text"
          value={editedName}
          onChange={handleInputChange}
          onBlur={handleSubmit}
          onKeyPress={handleKeyPress}
          className="bg-transparent focus:outline-none text-lg flex-grow"
          autoFocus
        />
      ) : (
        <div className="flex-grow">{name}</div>
      )}
      <MdEditSquare
        onClick={handleEditClick}
        className="mr-1.5 text-cyan-400 text-xl mt-0.5 cursor-pointer"
      />
      <FaTrash
        onClick={handleDelete}
        className="ml-auto mr-1 text-slate-400 cursor-pointer"
      />
    </div>
  );
};

export default Task;
