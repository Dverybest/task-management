import styled from "styled-components";
import { Button, DescriptionInput, TaskList, TitleInput } from "../components";
import {
  ChangeEvent,
  FC,
  MouseEvent,
  useContext,
  useRef,
  useState,
} from "react";
import { TaskContext } from "../context";
import { Status } from "../interfaces";

export const Home: FC = () => {
  const [state, setState] = useState({ title: "", description: "" });
  const ref = useRef<HTMLFormElement>(null);
  const { tasks, handleAddTask } = useContext(TaskContext);

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const onAddTask = (e: MouseEvent<HTMLButtonElement>) => {
    if (ref.current?.checkValidity()) {
      e.preventDefault();
      const task = {
        ...state,
        id: `${new Date().getTime()}`,
        status: Status.TODO,
      };
      handleAddTask(task);
      setState({ title: "", description: "" });
    }
  };
  return (
    <Container>
      <SectionContainer>
        <Form action="#" ref={ref}>
          <AddTask>Add a new Task</AddTask>
          <TitleInput
            value={state.title}
            required
            onChange={onInputChange}
            id="title"
            placeholder="Title"
          />
          <DescriptionInput
            id="description"
            required
            value={state.description}
            onChange={onInputChange}
            placeholder="Description"
          />
          <Button icon={"fi fi-rs-plus"} text={"Add"} onClick={onAddTask} />
        </Form>
      </SectionContainer>
      <TaskList tasks={tasks} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1;
  column-gap: 50px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const SectionContainer = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex: unset;
  }
`;
const Form = styled.form`
  display: flex;
  padding: 30px;
  flex:1;
  max-width: 500px;
  flex-direction: column;
  row-gap: 20px;
  @media (max-width: 768px) {
    align-self: unset;
    row-gap: 10px;
    padding: 30px 50px;
  }
  @media (max-width: 425px) {
    align-self: unset;
    row-gap: 10px;
    padding: 20px;
  }
`;
const AddTask = styled.h2`
  margin: 0;
`;
