import { FC, createContext, useState } from "react";
import { ITask } from "../interfaces";

type ITaskContext = {
  tasks: ITask[];
  handleEditTask: (task: ITask) => void;
  handleAddTask: (task: ITask) => void;
};

export const TaskContext = createContext<ITaskContext>({
  tasks: [],
  handleAddTask: () => {},
  handleEditTask: () => {},
});

type ITaskContextProvider = {
  children: JSX.Element;
};
export const TaskContextProvider: FC<ITaskContextProvider> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddTask = (task: ITask) => {
    tasks.push(task);
  };
  const handleEditTask = (task: ITask) => {
    const taskIndex = tasks.findIndex((item) => item.id === task.id);
    if (taskIndex !== -1) {
      setTasks((prev) => {
        const taskArr = [...prev];
        taskArr[taskIndex] = task;
        return taskArr;
      });
    }
  };
  return (
    <TaskContext.Provider value={{ tasks, handleAddTask, handleEditTask }}>
      {children}
    </TaskContext.Provider>
  );
};
