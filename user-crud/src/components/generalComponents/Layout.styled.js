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
  box-sizing: border-box;

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
    color: white;
  }
  & .content {
    background: linear-gradient(90deg, #3e5c7e 0%, #dc7082 100%);
  }
`;

export const Content = styled.div`
  background: linear-gradient(90deg, #3e5c7e 0%, #dc7082 100%);
`;
