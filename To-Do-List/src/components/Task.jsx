import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { FaTrash } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";

const Task = ({ id, name, done, onToggle, onDelete, onRename }) => {
  const [editedName, setEditedName] = useState(name);
  const [editing, setEditing] = useState(false);

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
    console.log("Submitting edited name:", editedName);
    onRename(id, editedName);
    setEditing(false); // Exit editing mode after submission
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
      e.target.blur();
    }
  };

  const handleEditClick = () => {
    setEditing(true); // Activate editing mode
  };

  return (
    <div className="flex items-center mx-2 my-3 p-2 bg-slate-700 rounded-lg">
      <Checkbox taskId={id} defaultChecked={done} onChange={handleToggle} />
      {editing ? (
        <input
          type="text"
          value={editedName}
          onChange={handleInputChange}
          onBlur={handleSubmit}
          onKeyPress={handleKeyPress}
          className="bg-transparent focus:outline-none text-lg flex-grow"
        />
      ) : (
        <span className="text-lg flex-grow" onClick={handleEditClick}>
          {name}
        </span>
      )}
      <MdEditSquare
        onClick={handleEditClick}
        className="text-cyan-400 text-xl mt-0.5 mr-1 cursor-pointer"
      />
      <FaTrash
        onClick={handleDelete}
        className="ml-auto mr-1 text-slate-400 cursor-pointer"
      />
    </div>
  );
};

export default Task;
