import React from 'react';
import { IContainerProps, IPanelProps } from "./layout.interface";
import {ContainerElement, PanelElement} from "./layout.styles";

export const Container = (props: IContainerProps) => {
    return (
        <ContainerElement {...props} id='Container'>
            {props.children}
        </ContainerElement>
    )
};

export const Panel = (props: IPanelProps) => {
  return (
    <PanelElement id='Panel' {...props}>
      {props.children}
    </PanelElement>
  )
};
