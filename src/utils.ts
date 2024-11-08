import { Task } from "./types";

type Props = {
  tasks: Task[];
}

const getIncompleteTasksCount = ({tasks}: Props) => {
  return tasks.reduce(
          (count, task) => (task.isCompleted ? count : count + 1),
          0
        );
}

const getTasksCounterLabel = (incompleteTasksCount: number) => {
  if (incompleteTasksCount === 0) return "No tasks left!";
  if (incompleteTasksCount === 1) return `${incompleteTasksCount} item left!`;
  return `${incompleteTasksCount} items left!`
 }

export { getIncompleteTasksCount, getTasksCounterLabel }