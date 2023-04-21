import { FC } from "react";
import styled from "styled-components";

export const Navbar:FC = () => {
  return <Container>{`Task Management > Home`}</Container>;
};

const Container = styled.nav`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  padding: 15px 20px;
`;
