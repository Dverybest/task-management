import { FC } from "react";
import styled from "styled-components";
import { ITask } from "../interfaces";
import { Button } from ".";

type ITaskProp = ITask & { onEdit: () => void; onDeleteClick: () => void };

export const Task: FC<ITaskProp> = ({
  title,
  description,
  status,
  onEdit,
  onDeleteClick,
}) => {
  return (
    <Container className="task">
      <Title id={"task-title"}>{title}</Title>
      <Description id={"task-description"}>{description}</Description>
      <StatusContainer>
        <Status id={"task-status"}>{status}</Status>
        <Icon
          data-testid={"editIcon"}
          className={"fi fi-bs-edit"}
          onClick={onEdit}
        />
        <DeleteButton text="Delete" onClick={onDeleteClick} />
      </StatusContainer>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: calc(47% - 32px);
  height: 200px;
  border-radius: 8px;
  padding: 16px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 2px 4px #888888;
`;
const Title = styled.h3`
  font-size: 18px;
  line-height: 24px;
  margin: 0;
  height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  font-size: 16px;
  flex: 1;
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Status = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  padding: 6px;
  text-align: center;
  width: 100px;
`;
const Icon = styled.i`
  ::before {
    font-size: 20px;
  }
`;
const DeleteButton = styled(Button)`
  background-color: red;
`;
