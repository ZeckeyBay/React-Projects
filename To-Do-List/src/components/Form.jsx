import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      onAdd(taskName);
      setTaskName("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex border-2 border-slate-500 rounded-lg p-2 mt-5"
    >
      <button className="border-0 rounded bg-cyan-400 px-3 text-zinc-900 font-bold mr-2">
        +
      </button>
      <input
        className="border-0 px-1 py-2 bg-transparent focus:outline-none"
        type="text"
        placeholder="Add a new task..."
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
    </form>
  );
};

export default Form;
