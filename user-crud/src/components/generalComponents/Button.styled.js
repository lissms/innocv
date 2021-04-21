import styled from "styled-components";

export const ButtonStyle = styled.div`
  background: ${(props) => `${props.background}`};
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  display: ${(props) => `${props.display}`};
  justify-content: ${(props) => `${props.justifyContent}`};
  align-items: ${(props) => `${props.alignItems}`};
`;
