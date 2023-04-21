import styled from "styled-components";

export const TitleInput = styled.input`
  border: none;
  flex: 1;
  height: 40px;
  padding: 10px;
  font-weight: 800;
  border-radius: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.lightGrey};
`;

export const DescriptionInput = styled.textarea`
  min-height: 150px;
  border: none;
  padding: 10px;
  font-weight: 400;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.lightGrey};
  @media (max-width:800px) {
    min-height: 80px;
  }
`;
