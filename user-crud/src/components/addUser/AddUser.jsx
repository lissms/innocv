import React, { useState } from "react";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//COMPONENTS
import Button from "../generalComponents/Button";

//SERVICE/ API

import { addNewUser } from "../../services/user";

function AddUser(props) {
  const [newUserName, setNewUserName] = useState("");
  const [newUserBirthday, setNewUserBirthday] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <label for="Name">Name*:</label>
      <input
        onChange={(ev) => {
          setNewUserName(ev.target.value);
        }}
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        required
      />
      <label for="Name">Birthdate*:</label>
      <input
        onChange={(ev) => {
          setNewUserBirthday(ev.target.value);
        }}
        type="date"
        id="birthday"
        name="birthday"
        required
      ></input>
      <p>{message}</p>
      <Button
        onClick={() => {
          addNewUser(newUserName, newUserBirthday);
          setMessage(`the user named ${newUserName} has been added successfully`);
        }}
      >
        Save
      </Button>
      <Link className="caracterDatails__link--back" to="/">
        back to list
      </Link>
    </div>
  );
}

export default AddUser;
