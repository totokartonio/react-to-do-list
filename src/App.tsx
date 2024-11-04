import React, { useState } from "react";

import { Label } from "./components/Label/Label";
import { NewTaskInput } from "./components/NewTaskInput/NewTaskInput";
import { NewTaskButton } from "./components/NewTaskButton/NewTaskButton";
import { NewTask } from "./components/NewTask/NewTask";
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

  return (
    <div>
      <Label />
      <form onSubmit={handleAddTask}>
        <NewTaskInput onChange={setNewTask} value={newTask} />
        <NewTaskButton />
      </form>
      <div className="taskList">
        {tasks.map((task) => (
          <NewTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;
