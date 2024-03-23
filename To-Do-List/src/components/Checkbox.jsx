import React, { useEffect, useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { RiCheckboxBlankFill } from "react-icons/ri";

const Checkbox = ({ taskId, defaultChecked = false, onChange }) => {
  const [checked, setChecked] = useState(() => {
    const savedState = localStorage.getItem(`checkboxState-${taskId}`);
    return savedState !== null ? JSON.parse(savedState) : defaultChecked;
  });

  useEffect(() => {
    localStorage.setItem(`checkboxState-${taskId}`, JSON.stringify(checked));
  }, [checked, taskId]);

  const toggleChecked = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div onClick={toggleChecked} style={{ cursor: "pointer" }}>
      {!checked && (
        <span>
          <RiCheckboxBlankFill color="rgb(34,211,238)" fontSize="24px" />
        </span>
      )}
      {checked && (
        <IoCheckbox color="rgb(34,211,238)" fontSize="24px" opacity="0.3" />
      )}
    </div>
  );
};

export default Checkbox;
