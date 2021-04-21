import styled from "styled-components";

export const LayoutStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .title {
    color: blue;
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
