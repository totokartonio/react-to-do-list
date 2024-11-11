import React, { useState } from "react";

import "./styles/reset.css";
import "./styles/style.css";

import { Label } from "./components/Label/Label";
import { NewTaskInput } from "./components/NewTaskInput/NewTaskInput";
import { NewTaskButton } from "./components/NewTaskButton/NewTaskButton";
import { TasksList } from "./components/TasksList/TasksList";
import { IncompleteTasksCounter } from "./components/IncompleteTasksCounter/IncompleteTasksCounter";
import { ClearCompletedButton } from "./components/ClearCompletedButton/ClearCompletedButton";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { getIncompleteTasksCount } from "./utils";
import type { Task } from "./types";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("all");

  const handleAddTask = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const task: Task = {
      id: crypto.randomUUID(),
      title: newTask,
      isCompleted: false,
    };
    setTasks((prevTasks) => [...prevTasks, task]);
    setNewTask("");
  };

  const handleComplete = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleClearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.isCompleted));
  };

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.isCompleted;
    if (filter === "active") return !task.isCompleted;
  });

  return (
    <div>
      <div className="content-container">
        <form className="new-task-form" onSubmit={handleAddTask}>
          <Label />
          <NewTaskInput onChange={setNewTask} value={newTask} />
          <NewTaskButton />
        </form>
        <TasksList tasks={filteredTasks} onComplete={handleComplete} />
        {tasks.length > 0 && (
          <IncompleteTasksCounter count={getIncompleteTasksCount(tasks)} />
        )}
        <ClearCompletedButton onClick={handleClearCompletedTasks} />
        <TaskFilter
          selectedFilter={filter}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default App;
