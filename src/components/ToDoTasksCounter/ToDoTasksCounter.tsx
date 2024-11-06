type Props = {
  tasksToDo: number | undefined;
};

const ToDoTasksCounter = ({ tasksToDo }: Props) => {
  if (tasksToDo === undefined) {
    return;
  } else if (tasksToDo === 0) {
    return <div className="toDoTasksCounter">No tasks left!</div>;
  } else if (tasksToDo === 1) {
    return <div className="toDoTasksCounter">{tasksToDo} task left!</div>;
  } else {
    return <div className="toDoTasksCounter">{tasksToDo} tasks left!</div>;
  }
};

export { ToDoTasksCounter };
