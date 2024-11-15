import type { Task } from "../../types";
import "./TaskItem.css";
import { Button } from "../Button/Button";

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
      <Button buttonClass="edit-button" onClick={handleEditTask}>
        Edit
      </Button>
      <Button buttonClass="delete-button" onClick={handleDeleteTask}>
        Delete
      </Button>
    </div>
  );
};

export { TaskItem };
