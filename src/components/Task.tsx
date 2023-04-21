import { FC } from "react";
import styled from "styled-components";
import { ITask } from "../interfaces";

export const Task: FC<ITask> = ({ title, description, status,id }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <StatusContainer>
        <Status>{status}</Status>
        <Icon className={"fi fi-bs-edit"} />
      </StatusContainer>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: calc(48% - 32px);
  border-radius: 8px;
  padding: 16px;
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
