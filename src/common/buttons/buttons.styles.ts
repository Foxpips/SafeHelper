import styled from "styled-components";
import {IAlignment, IBtnType, IButtonComponentEle} from "./buttons.interfaces";

const buttonStyles = (btnType: IBtnType) => {
  switch(btnType) {

    case 'primary': {
      return {
        color: 'blue',
        bgColor: 'white',
        hoverColor: 'red',
        hoverBgColor: 'white'
      }
    }

    case 'secondary': {
      return {
        color: 'green',
        bgColor: 'lightpink',
        hoverColor: 'blue',
        hoverBgColor: 'lightpink'
      }
    }

    case 'timeslotBtn': {
      return {
        color: 'green',
        bgColor: 'lightpink',
        hoverColor: 'blue',
        hoverBgColor: 'lightpink'
      }
    }

    default: {
      return {
        color: 'blue',
        bgColor: 'red',
        hoverColor: 'pink',
        hoverBgColor: 'blue'
      }
    }

  }
};

const marginAlignment = (align: IAlignment) => {
  if (align === 'left') {
    return 'margin: auto auto auto 0;'
  } else if (align === 'right') {
    return 'margin: auto 0 auto auto;'
  } else {
    return 'margin: auto;'
  }
};

export const ButtonStyled = styled.button((props: IButtonComponentEle) => `
  display: block;
  width: ${props.fullWidth ? '100%' : 'initial'};
  padding: 4px 12px;
  margin: auto;
  text-align: center;
  color: ${buttonStyles(props.btnType).color};
  border: 1px solid ${buttonStyles(props.btnType).color};
  background-color: ${buttonStyles(props.btnType).bgColor};
  ${props.alignment && marginAlignment(props.alignment)}
`);
