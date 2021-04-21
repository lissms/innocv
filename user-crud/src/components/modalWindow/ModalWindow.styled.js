import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 43, 69, 0.8);
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .modal-container {
    background-color: rgb(224, 224, 224);
    width: 50%;
    border-radius: 8px;
    padding: 32px;
  }
  & .title-modal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const InputTitle = styled.input`
  width: 100%;
  height: 48px;
  border: 2px solid rgb(224, 224, 224);
  box-sizing: border-box;
  border-radius: 4px;
  margin: 12px;
  padding: 15px;
  &::-webkit-input-placeholder {
    color: rgb(91, 141, 207);
  }
  &:-moz-placeholder {
    color: rgb(91, 141, 207);
  }
  &::-moz-placeholder {
    color: rgb(91, 141, 207);
  }
  &:-ms-input-placeholder {
    color: rgb(91, 141, 207);
  }
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 60%;
  border: 2px solid rgb(224, 224, 224);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 12px;
  &::-webkit-input-placeholder {
    color: rgb(91, 141, 207);
  }
  &:-moz-placeholder {
    color: rgb(91, 141, 207);
  }
  &::-moz-placeholder {
    color: rgb(91, 141, 207);
  }
  &:-ms-input-placeholder {
    color: rgb(91, 141, 207);
  }
`;

export const InputSubmit = styled.input`
  border: none;
  -webkit-appearance: none;
  -webkit-border-radius: none;
  text-transform: uppercase;
  width: 100%;
  height: 38px;
  border-radius: 8px;
  border: solid 2px rgb(91, 141, 207);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: rgb(91, 141, 207);
  transition: transform ease 0.3s;
  color: ${(props) => (props.text === "" || props.title === "" ? `rgb(224, 224, 224)` : `rgb(91, 141, 207)`)};
  border: ${(props) => (props.text === "" || props.title === "" ? `#827a7a` : `solid 2px rgb(91, 141, 207)`)};
  &:hover {
    transform: scale(1.05);
  }
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 200px;
  cursor: pointer;
  & p {
    font-size: 15px;
    color: rgb(91, 141, 207);
  }
`;
