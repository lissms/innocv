import styled from "styled-components";

export const UserStyle = styled.div`
  background: #ffffff42;
  border-radius: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  & .container_user {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & .name {
    font-weight: bold;
    font-size: 18px;
  }

  & .button_container {
    display: flex;
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

  & .birthday {
    font-weight: 300;
    font-size: 12px;
  }

  & .container_user > p:first-child {
    font-weight: bold;
  }
`;
