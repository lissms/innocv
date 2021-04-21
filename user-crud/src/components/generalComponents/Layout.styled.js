import styled from "styled-components";

export const LayoutStyle = styled.div`
  background: #000;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 12vh;
  top: 0;

  & .title {
    color: white;
    margin-left: 16px;
    font-weight: 100;
  }
  & .logo {
    width: 100px;
  }
  & .title-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & .link--back {
    cursor: pointer;
    width: 70px;
  }
`;
