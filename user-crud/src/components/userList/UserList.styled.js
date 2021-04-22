import styled from "styled-components";

export const ListStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  margin-top: 16px;

  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 16px;
  }
  @media all and (min-width: 1200px) {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
  }
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  cursor: pointer;
`;
