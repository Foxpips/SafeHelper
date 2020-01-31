import {IContainerElement, IPanelElement} from "./layout.styles";

export interface IContainerProps extends IContainerElement {
  children?: any;
}

export interface IPanelProps extends IPanelElement{
  children?: any;
}
