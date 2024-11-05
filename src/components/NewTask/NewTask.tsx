import type { Task } from "../../types";
import "./NewTask.css";

type Props = {
  task: Task;
  onComplete: () => void;
};

const NewTask = ({ task, onComplete }: Props) => {
  return (
    <div className="task">
      <input type="checkbox" checked={task.isCompleted} onChange={onComplete} />
      <p>{task.title}</p>
    </div>
  );
};

export { NewTask };
