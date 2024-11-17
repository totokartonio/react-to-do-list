import "./TasksList.css";
import { FilterValues } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";
import { Task } from "../../types";

type Props = {
  tasks: Task[];
  filter: FilterValues;
  onComplete: (taskId: string) => void;
};

const TasksList = ({ tasks, filter, onComplete }: Props) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === FilterValues.All) return true;
    if (filter === FilterValues.Completed) return task.isCompleted;
    if (filter === FilterValues.Active) return !task.isCompleted;
  });

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
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
