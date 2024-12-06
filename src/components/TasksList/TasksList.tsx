import "./TasksList.css";
import { FilterValues } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";
import { Task } from "../../types";
import { useState } from "react";

type Props = {
  tasks: Task[];
  filter: FilterValues;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
  onUpdate: (updatedTask: Task) => void;
};

const TasksList = ({
  tasks,
  filter,
  onComplete,
  onDelete,
  onUpdate,
}: Props) => {
  const [taskList, setTaskList] = useState(tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === FilterValues.All) return true;
    if (filter === FilterValues.Completed) return task.isCompleted;
    if (filter === FilterValues.Active) return !task.isCompleted;
  });

  const handleTaskUpdate = (updatedTask: Task) => {
    const updatedTasks = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTaskList(updatedTasks);
    onUpdate(updatedTask);
  };

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={() => onComplete(task.id)}
          onDelete={() => onDelete(task.id)}
          onUpdate={handleTaskUpdate}
        />
      ))}
    </div>
  );
};

export { TasksList };
