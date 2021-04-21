import styled from "styled-components";

export const UserDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  & .user-target span {
    font-size: 14px;
    font-weight: 100;
  }
  & .show-modal {
    cursor: pointer;
  }
  & .button_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
  }

  & .button {
    width: 28px;
    height: 28px;
    cursor: pointer;
    margin: 3px;
    background: #f17680;
    border: none;
    color: white;
    border-radius: 4px;
  }
`;
