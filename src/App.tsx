import React, { useState } from "react";

import "./styles/reset.css";
import "./styles/style.css";

import { Label } from "./components/Label/Label";
import { NewTaskInput } from "./components/NewTaskInput/NewTaskInput";
import { TasksList } from "./components/TasksList/TasksList";
import { ActiveTasksCounter } from "./components/ActiveTasksCounter/ActiveTasksCounter";
import { Button } from "./components/Button/Button";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { getActiveTasksCount } from "./utils";
import { FilterValues } from "./types";
import type { Task } from "./types";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterValues>(FilterValues.All);

  const handleTaskAdd = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const task: Task = {
      id: crypto.randomUUID(),
      title: newTask,
      isCompleted: false,
    };
    setTasks((prevTasks) => [...prevTasks, task]);
    setNewTask("");
  };

  const handleTaskComplete = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleTaskDelete = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleTaskUpdate = (id: string, value: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: value } : task
      )
    );
  };

  const handleClearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.isCompleted));
  };

  const handleFilterChange = (selectedFilter: FilterValues) => {
    setFilter(selectedFilter);
  };

  return (
    <div>
      <div className="content-container">
        <form className="new-task-form" onSubmit={handleTaskAdd}>
          <Label />
          <NewTaskInput onChange={setNewTask} value={newTask} />
          <Button type="submit" variant="primary" size="medium">
            Add task
          </Button>
        </form>
        <TasksList
          tasks={tasks}
          filter={filter}
          onComplete={handleTaskComplete}
          onDelete={handleTaskDelete}
          onUpdate={handleTaskUpdate}
        />
        {tasks.length > 0 && (
          <ActiveTasksCounter count={getActiveTasksCount(tasks)} />
        )}
        <Button
          variant="primary"
          size="large"
          onClick={handleClearCompletedTasks}
        >
          Clear Completed Tasks
        </Button>
        <TaskFilter
          selectedFilter={filter}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default App;
