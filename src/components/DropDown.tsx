import { FC } from "react";
import styled from "styled-components";

type IDropDown = {
  options: string[];
  defaultValue: string;
  onChange: (value: string) => void;
};
export const DropDown: FC<IDropDown> = ({
  defaultValue,
  options,
  onChange,
}) => {
  return (
    <Select
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
    >
      {options.map((item, index) => (
        <Option value={item} key={index}>
          {item}
        </Option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  height: 40px;
  padding: 10px;
`;

const Option = styled.option``;
