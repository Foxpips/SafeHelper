import * as React from 'react';
import {InputComponent, InputStyled, InputTitle} from "./input.styles";

export interface IInputProps {
  title: string;
  placeholder: string;
  inputId: string;
  value: string | number;
  handleChange: (value: string, inputId: string) => void;
}
export default (props: IInputProps) => {
  return (
    <InputComponent>
      <InputTitle>{props.title}</InputTitle>
      <InputStyled
        type={'text'}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.handleChange(e.target.value, props.inputId)}/>
    </InputComponent>
  )
}
