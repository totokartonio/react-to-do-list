import { NewTask } from "../NewTask/NewTask";
import { Task } from "../../types";

type Props = {
  tasks: Task[];
};

const TasksList = ({ tasks }: Props) => {
  return (
    <div className="tasksList">
      {tasks.map((task) => (
        <NewTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export { TasksList };
