import { FC, createContext, useState } from "react";
import { ITask, Status } from "../interfaces";

type ITaskContext = {
  tasks: ITask[];
  handleEditTask: (task: ITask) => void;
  handleAddTask: (task: ITask) => void;
  handleDeleteTask: (id: string) => void;
};

export const TaskContext = createContext<ITaskContext>({
  tasks: [],
  handleAddTask: () => {},
  handleEditTask: () => {},
  handleDeleteTask: () => {},
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
  
    const taskArr = tasks.reduce<ITask[]>((acc, item) => {
      if (item.id === task.id) {
        if (task.status === Status.DEPLOYED) return acc;
        return [...acc, task];
      }
      return [...acc, item];
    }, []);
    setTasks(taskArr);
  };
  const handleDeleteTask = (id: string) => {
    const taskArr = tasks.filter((task) => task.id !== id);
    setTasks(taskArr);
  };
  return (
    <TaskContext.Provider
      value={{ tasks, handleAddTask, handleEditTask, handleDeleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
