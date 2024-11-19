import type { Task } from "../../types";
import "./TaskItem.css";
import { Button } from "../Button/Button";
import { EditIcon, DeleteIcon } from "./Icons";

type Props = {
  task: Task;
  onComplete: () => void;
  onDelete: () => void;
};

const handleEditTask = () => {
  console.log("Edited!");
};

const TaskItem = ({ task, onComplete, onDelete }: Props) => {
  return (
    <div className="task">
      <input
        className="checkbox"
        type="checkbox"
        checked={task.isCompleted}
        onChange={onComplete}
      />
      <p>{task.title}</p>
      <Button variant="secondary" size="small" onClick={handleEditTask}>
        <EditIcon />
      </Button>
      <Button variant="negative" size="small" onClick={onDelete}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export { TaskItem };
