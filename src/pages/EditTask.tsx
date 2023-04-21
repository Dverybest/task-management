import {
  ChangeEvent,
  FC,
  MouseEvent,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Button, DescriptionInput, DropDown, TitleInput } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import { ITask, Status, statusConfig } from "../interfaces";
import { TaskContext } from "../context";

export const EditTask: FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const ref = useRef<HTMLFormElement>(null);
  const { handleEditTask } = useContext(TaskContext);
  const [task, setTask] = useState(state as ITask);
  const statuses = useMemo(() => {
    return statusConfig[(state as ITask).status];
  }, [state]);
  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const onStatusChange = (status: Status) => {
    setTask((prev) => ({ ...prev, status }));
  };
  const onCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };
  const onEdit = (e: MouseEvent<HTMLButtonElement>) => {
    if (ref.current?.checkValidity()) {
      e.preventDefault();
      handleEditTask(task);
      navigate(-1);
    }
  };
  return (
    <Container>
      <Form ref={ref}>
        <AddTask>Add a new Task</AddTask>
        <TitleInput
          value={task.title}
          required
          onChange={onInputChange}
          id="title"
          placeholder="Title"
        />
        <Description
          id="description"
          required
          value={task.description}
          onChange={onInputChange}
          placeholder="Description"
        />
        <DropDown
          defaultValue={task.status}
          options={statuses}
          onChange={(value) => onStatusChange(value as Status)}
        />
        <ButtonContainer>
          <Button icon={"fi fi-bs-edit"} text={"Edit"} onClick={onEdit} />
          <Button text={"Cancel"} isOutline onClick={onCancel} />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

const Container = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const Form = styled.form`
  display: flex;
  padding: 30px;
  flex: 1;
  max-width: 500px;
  flex-direction: column;
  row-gap: 20px;
  @media (max-width: 768px) {
    align-self: unset;
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

const Description = styled(DescriptionInput)`
  flex: 1;
  height: unset;
`;
const ButtonContainer = styled.div`
  display: flex;
  column-gap: 20px;
  button {
    flex: 1;
  }
`;
