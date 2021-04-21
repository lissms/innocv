import styled from "styled-components";

export const AddUserStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 73vh;
  margin-top: 50px;

  & .from {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 73vh;
    margin-top: 50px;
  }
  & .add-name {
    margin-bottom: 10px;
  }
  & .add-birthday {
    margin-bottom: 10px;
  }
  & .button-save {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7vh;
    background: gray;
    width: 100%;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  & .user-name {
    color: red;
    font-weight: bold;
  }
`;
