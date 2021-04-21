import styled from "styled-components";

export const UserDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
  height: 78vh;

  & .user-target {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fabada;
    width: 300px;
    height: 250px;
    margin-top: 50px;
    border-radius: 20px;
  }
  & .show-modal {
    cursor: pointer;
  }
  & .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 53px;
  }
`;
