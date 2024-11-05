import React, { useState } from "react";

import "./styles/reset.css";

import { Label } from "./components/Label/Label";
import { NewTaskInput } from "./components/NewTaskInput/NewTaskInput";
import { NewTaskButton } from "./components/NewTaskButton/NewTaskButton";
import { TasksList } from "./components/TasksList/TasksList";
import type { Task } from "./types";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleAddTask = (event: React.SyntheticEvent) => {
    // if (!newTask) return;
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

  return (
    <div>
      <Label />
      <form onSubmit={handleAddTask}>
        <NewTaskInput onChange={setNewTask} value={newTask} />
        <NewTaskButton />
      </form>
      <TasksList tasks={tasks} onComplete={handleComplete} />
    </div>
  );
}

export default App;
