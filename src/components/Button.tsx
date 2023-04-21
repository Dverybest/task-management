import { FC } from "react";
import styled, { css } from "styled-components";

type IButton = {
  text: string;
  isOutline?: boolean;
  icon?: string;
};
export const Button: FC<IButton> = ({ text, icon, isOutline, ...rest }) => {
  return (
    <ButtonStyle isOutline={isOutline} {...rest}>
      {icon && <Icon className={icon} />} {text}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{ isOutline?: boolean }>`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  font-weight: 500;
  ${({ isOutline }) =>
    !isOutline
      ? css`
          outline: none;
          border: none;
          border-radius: 4px;
          color: ${({ theme }) => theme.color.white};
          background-color: ${({ theme }) => theme.color.primary};
        `
      : css``}
`;

const Icon = styled.i``;
