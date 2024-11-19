import React, { useState } from "react";

import "./styles/reset.css";
import "./styles/style.css";

import { Label } from "./components/Label/Label";
import { NewTaskInput } from "./components/NewTaskInput/NewTaskInput";
import { TasksList } from "./components/TasksList/TasksList";
import { IncompleteTasksCounter } from "./components/IncompleteTasksCounter/IncompleteTasksCounter";
import { Button } from "./components/Button/Button";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { getIncompleteTasksCount } from "./utils";
import { FilterValues } from "./types";
import type { Task } from "./types";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterValues>(FilterValues.All);

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

  const handleTaskDelete = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
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
        <form className="new-task-form" onSubmit={handleAddTask}>
          <Label />
          <NewTaskInput onChange={setNewTask} value={newTask} />
          <Button type="submit" variant="primary" size="medium">
            Add task
          </Button>
        </form>
        <TasksList
          tasks={tasks}
          filter={filter}
          onComplete={handleComplete}
          onDelete={handleTaskDelete}
        />
        {tasks.length > 0 && (
          <IncompleteTasksCounter count={getIncompleteTasksCount(tasks)} />
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
