import styled from "styled-components";

export const InputComponent = styled.div((props: any) => `
  display: flex;
  flex-direction: column;
  width: 50%;  
`);

export const InputTitle = styled.div((props: any) => `
  font-weight: bold;
  padding: 2px;
  
`);

export const InputStyled = styled.input((props: any) => `
   padding: 4px 8px;
   border: 1px solid #ccc;
   border-radius: 4px;
   margin: 0 8px 20px 0;
`);
