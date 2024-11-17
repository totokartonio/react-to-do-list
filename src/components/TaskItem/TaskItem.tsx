import type { Task } from "../../types";
import "./TaskItem.css";
import { Button } from "../Button/Button";
import { EditIcon, DeleteIcon } from "./Icons";

type Props = {
  task: Task;
  onComplete: () => void;
};

const handleEditTask = () => {
  console.log("Edited!");
};
const handleDeleteTask = () => {
  console.log("Deleted!");
};

const TaskItem = ({ task, onComplete }: Props) => {
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
      <Button variant="negative" size="small" onClick={handleDeleteTask}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export { TaskItem };
