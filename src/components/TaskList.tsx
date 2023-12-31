import { FC, useContext } from "react";
import styled from "styled-components";
import { Task } from "./Task";
import { ITask } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context";

type ITaskList = {
  tasks: ITask[];
};
export const TaskList: FC<ITaskList> = ({ tasks }) => {
  const navigate = useNavigate();
  const { handleDeleteTask } = useContext(TaskContext);
  return (
    <Conatainer>
      <DisplaySectionTitle>Tasks</DisplaySectionTitle>
      <InnerConatainer data-testid={"taskListContainer"}>
        {tasks.length === 0 && (
          <EmptyText>You have nothing to do. Go get some sleep.</EmptyText>
        )}
        {tasks.map((task) => (
          <Task
            onEdit={() => {
              navigate(`/edit/${task.id}`, { state: task });
            }}
            onDeleteClick={() => handleDeleteTask(task.id)}
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))}
      </InnerConatainer>
    </Conatainer>
  );
};

const Conatainer = styled.section`
  display: flex;
  flex: 1;
  margin-top: 50px;
  flex-direction: column;
  overflow-y: auto;
  border-radius: 16px 16px 0px 0px;
  background-color: ${({ theme }) => theme.color.primary};
  @media (max-width: 800px) {
    margin-top: 0;
  }
`;
const EmptyText = styled.p`
  align-self: center;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  flex: 1;
`;
const DisplaySectionTitle = styled.h3`
  margin: 25px;
  color: ${({ theme }) => theme.color.white};
`;
const InnerConatainer = styled.section`
  display: flex;
  flex: 1;
  padding: 20px;
  column-gap: 16px;
  row-gap: 16px;
  flex-wrap: wrap;
  overflow-y: auto;
  border-radius: 16px 16px 0px 0px;
  background-color: ${({ theme }) => theme.color.lightBlue};
`;
