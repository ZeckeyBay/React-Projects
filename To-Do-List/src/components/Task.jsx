// Task.js
import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { FaTrash } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import Modal from "./Modal";

const Task = ({ id, name, done, onToggle, onDelete, onRename }) => {
  const [editedName, setEditedName] = useState(name);
  const [editing, setEditing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleToggle = () => {
    onToggle(id);
  };

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleSubmit = () => {
    if (editedName.trim() !== "") {
      onRename(id, editedName);
      setEditing(false);
    }
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
          autoFocus
          maxLength={100} // Max character limit
          className="bg-transparent focus:outline-none text-lg flex-grow border border-red-500"
        />
      ) : (
        <div className="ml-3 flex-grow break-words truncate whitespace-normal">
          {name}
        </div>
      )}
      <div className="flex ml-2">
        <MdEditSquare
          onClick={handleEditClick}
          className={`text-cyan-400 text-xl cursor-pointer ${
            editing ? "opacity-50 pointer-events-none" : ""
          }`}
        />
        <FaTrash
          onClick={handleDelete}
          className={`ml-2 text-slate-400 cursor-pointer ${
            editing ? "opacity-50 pointer-events-none" : ""
          }`}
        />
        {showConfirmation && (
          <Modal
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
