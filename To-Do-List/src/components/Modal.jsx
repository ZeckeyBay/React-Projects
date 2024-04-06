import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onCancel, onConfirm }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-slate-700 p-8 rounded-lg shadow-md">
        <p className="text-lg mb-4">
          Are you sure you want to delete this task?
        </p>
        <div className="flex justify-center">
          <button
            className="bg-red-500 text- px-4 py-2 rounded-md mr-4 hover:bg-white hover:text-red-500"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-cyan-400 text-black px-4 py-2 rounded-md hover:bg-white hover:text-cyan-400 "
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
