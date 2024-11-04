import React from "react";
import "./NewTaskInput.css";

type Props = {
  onChange: (value: string) => void;
  value: string;
};

const NewTaskInput = ({ onChange, value }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Enter a task"
      value={value}
      required
    />
  );
};

export { NewTaskInput };
