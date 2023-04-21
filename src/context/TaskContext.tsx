import { FC, createContext, useState } from "react";
import { ITask, Status } from "../interfaces";

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
    const taskArr = tasks.reduce((acc, item) => {
      if (item.id === task.id) {
        if (task.status === Status.DEPLOYED) return acc;
        return [...acc, task];
      }
      return [...acc, item];
    }, [] as ITask[]);
    setTasks(taskArr);
  };
  return (
    <TaskContext.Provider value={{ tasks, handleAddTask, handleEditTask }}>
      {children}
    </TaskContext.Provider>
  );
};
