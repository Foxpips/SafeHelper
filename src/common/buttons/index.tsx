import * as React from "react";
import {IButtonComponentProps} from "./buttons.interfaces";
import {ButtonStyled} from "./buttons.styles";


const Button = (props: IButtonComponentProps) => {

  return (
    <ButtonStyled
      fullWidth={props.fullWidth}
      btnType={props.btnType}
      alignment={props.alignment}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      { props.children }
    </ButtonStyled>
  );

};

export default Button;
