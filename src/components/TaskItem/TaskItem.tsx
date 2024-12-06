import { useState } from "react";
import type { Task } from "../../types";
import "./TaskItem.css";
import { Button } from "../Button/Button";
import { EditIcon, DeleteIcon, SaveIcon } from "../Icons/Icons";
import { NewTaskInput } from "../NewTaskInput/NewTaskInput";

type Props = {
  task: Task;
  onComplete: () => void;
  onDelete: () => void;
  onUpdate: (updatedTask: Task) => void;
};

const TaskItem = ({ task, onComplete, onDelete, onUpdate }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(task.title);

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const handleChange = (value: string) => {
    setTaskText(value);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate({ ...task, title: taskText });
  };

  return (
    <div className="task">
      <input
        className="checkbox"
        type="checkbox"
        checked={task.isCompleted}
        onChange={onComplete}
      />
      {isEditing ? (
        <>
          <NewTaskInput value={taskText} onChange={handleChange} />
          <Button
            type="submit"
            variant="primary"
            size="small"
            onClick={handleSave}
          >
            <SaveIcon />
          </Button>
        </>
      ) : (
        <>
          <p>{taskText}</p>
          <Button variant="secondary" size="small" onClick={handleEditTask}>
            <EditIcon />
          </Button>
        </>
      )}
      <Button variant="negative" size="small" onClick={onDelete}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export { TaskItem };
