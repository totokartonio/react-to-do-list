import { Task } from "./types";

const getActiveTasksCount = (tasks: Task[]) => {
  return tasks.reduce(
    (count, task) => (task.isCompleted ? count : count + 1),
    0
  );
};

const getTasksCounterLabel = (activeTasksCount: number) => {
  if (activeTasksCount === 0) return "No tasks left!";
  if (activeTasksCount === 1) return `${activeTasksCount} item left!`;
  return `${activeTasksCount} items left!`;
};

export { getActiveTasksCount, getTasksCounterLabel };
