import styled from "styled-components";
import { Button, DescriptionInput, TaskList, TitleInput } from "../components";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <Container>
      <SectionContainer>
        <AddTask>Add a new Task</AddTask>
        <TitleInput placeholder="Title" />
        <DescriptionInput placeholder="Description" />
        <Button icon={"fi fi-rs-plus"} text={"Add"} />
      </SectionContainer>
      <TaskList tasks={[]}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1;
  column-gap: 50px;
  @media (max-width:800px) {
    flex-direction: column;
  }
`;
const SectionContainer = styled.section`
  display: flex;
  align-self: center;
  padding: 30px;
  flex: 1;
  flex-direction: column;
  row-gap: 20px;
  @media (max-width:768px) {
    align-self: unset;
    row-gap: 10px;
    padding: 30px 50px;
  }
  @media (max-width:425px) {
    align-self: unset;
    row-gap: 10px;
    padding: 20px;
  }
`;
const AddTask = styled.h2`
  margin: 0;
`;
