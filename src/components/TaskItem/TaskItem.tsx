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
  onUpdate: (id: string, value: string) => void;
};

const TaskItem = ({ task, onComplete, onDelete, onUpdate }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleEditTitle = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(task.id, title);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <NewTaskInput value={title} onChange={setTitle} />
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
          <input
            className="checkbox"
            type="checkbox"
            checked={task.isCompleted}
            onChange={onComplete}
          />
          <p>{title}</p>
          <Button variant="secondary" size="small" onClick={handleEditTitle}>
            <EditIcon />
          </Button>
          <Button variant="negative" size="small" onClick={onDelete}>
            <DeleteIcon />
          </Button>
        </>
      )}
    </div>
  );
};

export { TaskItem };
