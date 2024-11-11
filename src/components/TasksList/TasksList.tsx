import "./TasksList.css";
import { TaskItem } from "../ TaskItem/TaskItem";
import { Task } from "../../types";

type Props = {
  tasks: Task[];
  onComplete: (taskId: string) => void;
};

const TasksList = ({ tasks, onComplete }: Props) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={() => onComplete(task.id)}
        />
      ))}
    </div>
  );
};

export { TasksList };
