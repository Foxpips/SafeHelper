import styled from "styled-components";

export interface IContainerElement {
  padding?: string;
  margin?: string;
  flex?: boolean;
  column?: boolean;
  alignment?: string
}

export interface IPanelElement extends IContainerElement{
  width?: string;
  height?: string;
  backgroundColor?: string;
  flexWrap?: string;
}
export const ContainerElement = styled.div((props: IContainerElement) => `
    width: 80%;
    padding: ${props.padding ? props.padding : 0};
    margin: ${props.margin ? props.margin : '0 auto'};
    ${props.flex &&'display: flex'};
    ${props.column && 'flex-direction: column'};
    justify-content: ${props.alignment};  
`);

export const PanelElement = styled.div((props: IPanelElement) => `
    width: ${props.width ? props.width : 'auto'};
    height: ${props.height ? props.height : 'auto'};
    padding: ${props.padding ? props.padding : '0'};
    margin: ${props.margin ? props.margin : '0'};
    background-color: ${props.backgroundColor};
    ${props.flex && 'display: flex;'}
    ${props.column && 'flex-direction: column;'}
    justify-content: ${props.alignment};
    flex-wrap: ${props.flexWrap};
`);
