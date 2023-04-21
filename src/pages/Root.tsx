import styled from "styled-components";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
import { FC } from "react";
import { TaskContextProvider } from "../context";

export const Root: FC = () => {
  return (
    <TaskContextProvider>
      <Container>
        <Navbar />
        <Outlet />
      </Container>
    </TaskContextProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow: hidden;
`;
