import { NewTask } from "../NewTask/NewTask";
import { Task } from "../../types";

type Props = {
  tasks: Task[];
  handleComplete: (taskId: string) => void;
};

const TasksList = ({ tasks, onComplete }: Props) => {
  return (
    <div className="tasksList">
      {tasks.map((task) => (
        <NewTask
          key={task.id}
          task={task}
          onComplete={() => onComplete(task.id)}
        />
      ))}
    </div>
  );
};

export { TasksList };
