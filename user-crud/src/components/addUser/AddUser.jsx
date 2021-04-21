import React, { useState } from "react";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//COMPONENTS
import Button from "../generalComponents/Button";
import Layout from "../generalComponents/Layout";

//STYLES
import { AddUserStyle } from "./AddUser.styled";

//SERVICE/ API

import { addNewUser } from "../../services/user";

function AddUser(props) {
  const [newUserName, setNewUserName] = useState("");
  const [newUserBirthday, setNewUserBirthday] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Layout />
      <AddUserStyle>
        <p>Add new user</p>

        <label className="add-name" for="Name">
          Name*:
        </label>
        <input
          className="add-name"
          onChange={(ev) => {
            setNewUserName(ev.target.value);
          }}
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
        <label className="add-birthday" for="Name">
          Birthdate*:
        </label>
        <input
          className="add-birthday"
          onChange={(ev) => {
            setNewUserBirthday(ev.target.value);
          }}
          type="date"
          id="birthday"
          name="birthday"
          required
        ></input>

        <p>{message}</p>
        <Link className="caracterDatails__link--back" to="/">
          back to list
        </Link>
      </AddUserStyle>

      <Button
        alignItems="center"
        justifyContent="center"
        display="flex"
        height="7vh"
        background="grey"
        width="100%"
        onClick={() => {
          addNewUser(newUserName, newUserBirthday);
          setMessage(`the user named ${newUserName} has been added successfully`);
        }}
      >
        Save
      </Button>
    </>
  );
}

export default AddUser;
