import type { Task } from "../../types";
import "./NewTask.css";

type Props = {
  task: Task;
};

const NewTask = ({ task }: Props) => {
  return (
    <div className="task">
      <input type="checkbox" /*checked={task.isCompleted}*/ />
      <p>{task.title}</p>
    </div>
  );
};

export { NewTask };
