import React, { useState } from "react";

//COMPONENTS
import Button from "../generalComponents/Button";
import Layout from "../generalComponents/Layout";

//STYLES
import { AddUserContainer, AddUserStyle } from "./AddUser.styled";

//SERVICE/ API

import { addNewUser } from "../../services/user";

function AddUser(props) {
  const [newUserName, setNewUserName] = useState("");
  const [newUserBirthday, setNewUserBirthday] = useState("");
  const [message, setMessage] = useState("");

  //disable state
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <Layout isButtonBackVisible={true}>
        <AddUserContainer>
          <AddUserStyle>
            <h2 className="title">Add new user</h2>
            <form className="from" onSubmit={handleFormSubmit}>
              <label className="add-name-label" for="Name">
                Name*:
              </label>
              <input
                className="add-name"
                onChange={(ev) => {
                  setNewUserName(ev.target.value);
                  setName(ev.target.value);
                }}
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
              />
              <label className="add-birthday-label" for="Name">
                Birthdate*:
              </label>
              <input
                className="add-birthday"
                onChange={(ev) => {
                  setNewUserBirthday(ev.target.value);
                  setBirthday(ev.target.value);
                }}
                type="date"
                id="birthday"
                name="birthday"
                required
              ></input>

              <input
                className="button-save"
                name={name}
                birthday={birthday}
                disabled={name === "" || birthday === ""}
                onClick={() => {
                  addNewUser(newUserName, newUserBirthday);
                  setMessage(`The user named  ${newUserName} has been added successfully`);
                }}
                type="submit"
                value="Save"
              />
            </form>
            <p>{message}</p>
          </AddUserStyle>
        </AddUserContainer>
      </Layout>
    </>
  );
}

export default AddUser;
