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
    font-size: 24px;
    padding: 5px;
  }

  & .logo {
    width: 22%;
  }

  & .title-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  & .link--back {
    cursor: pointer;
    width: 60px;
    color: white;
  }

  & .content {
    background: linear-gradient(90deg, #3e5c7e 0%, #dc7082 100%);
  }

  & .translation {
    color: white;
    cursor: pointer;
    width: 50px;
    position: absolute;
    right: 0px;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  background: linear-gradient(90deg, #3e5c7e 0%, #dc7082 100%);
  min-height: 100vh;
  padding-top: 12vh;
  box-sizing: border-box;
`;
