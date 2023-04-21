import { FC, useMemo } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const Navbar: FC = () => {
  const { pathname } = useLocation();

  const path = useMemo(() => {
    const [, name] = pathname.split("/");
    return name ? name : "Home";
  }, [pathname]);
  return <Container>{`Task Management > ${path}`}</Container>;
};

const Container = styled.nav`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  text-transform: capitalize;
  padding: 15px 20px;
`;
