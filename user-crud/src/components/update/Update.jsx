//REACT// HOOKS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//SERVICE/ API
import { updateUser, getUserDetails } from "../../services/user";

//COMPONENTS
import Button from "../../components/generalComponents/Button";
import Layout from "../generalComponents/Layout";

//UTILITIES
import dayjs from "dayjs";

//STYLES
import { UpdateStyle } from "./Update.styled";

function Update(props) {
  const [userName, setUserName] = useState("");
  const [userBirthday, setUserBirthday] = useState("");
  const [message, setMessage] = useState("");

  let myObjetParam = useParams();

  useEffect(() => {
    getUserDetails(myObjetParam.id).then((data) => {
      setUserName(data.name);
      setUserBirthday(data.birthdate);
    });
  }, []);

  return (
    <>
      <Layout />
      <UpdateStyle>
        <p>Update user</p>
        <label className="update-name" for="Name">
          Name:
        </label>
        <input
          className="update-name"
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={userName}
        />
        <label className="update-birthday" for="Name">
          Birthdate:
        </label>
        <input
          className="update-birthday"
          onChange={(ev) => {
            setUserBirthday(ev.target.value);
          }}
          type="date"
          id="birthday"
          name="birthday"
          value={dayjs(userBirthday).format("YYYY-MM-DD")}
        ></input>
        <p>{message}</p>
        <Link className="caracterDatails__link--back" to="/">
          back to list
        </Link>
      </UpdateStyle>
      <Button
        alignItems="center"
        justifyContent="center"
        display="flex"
        height="7vh"
        background="grey"
        width="100%"
        onClick={() => {
          updateUser(myObjetParam.id, userName, userBirthday);
          setMessage(`the user has been modified successfully`);
        }}
      >
        Save
      </Button>
    </>
  );
}

export default Update;
