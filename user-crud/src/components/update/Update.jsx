//REACT// HOOKS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//SERVICE/ API
import { updateUser, getUserDetails } from "../../services/user";

//COMPONENTS
import Button from "../../components/generalComponents/Button";

//UTILITIES
import dayjs from "dayjs";

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
    <div>
      <label for="Name">Name:</label>
      <input
        onChange={(ev) => {
          setUserName(ev.target.value);
        }}
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        value={userName}
      />
      <label for="Name">Birthdate:</label>
      <input
        onChange={(ev) => {
          setUserBirthday(ev.target.value);
        }}
        type="date"
        id="birthday"
        name="birthday"
        value={dayjs(userBirthday).format("YYYY-MM-DD")}
      ></input>
      <p>{message}</p>
      <Button
        onClick={() => {
          updateUser(myObjetParam.id, userName, userBirthday);
          setMessage(`the user has been modified successfully`);
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

export default Update;
