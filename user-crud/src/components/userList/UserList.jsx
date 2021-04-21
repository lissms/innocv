//REACT// HOOKS
import React, { useState, useEffect } from "react";

//SERVICE/ API
import { getUser } from "../../services/user";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//COMPONENTS
import User from "./User";
import Button from "../generalComponents/Button";

//UTILITIES
import dayjs from "dayjs";

//STYLES
import { ListStyle } from "./UserList.styled";

function UserList(props) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUser().then((data) => {
      setUserList(data);
    });
  }, []);

  const users = userList.map((user) => {
    return (
      <li className="listElement" key={user.id}>
        <User id={user.id} name={user.name} birthdate={dayjs(user.birthdate).format("DD MMMM YYYY")} />
      </li>
    );
  });

  return (
    <>
      <ListStyle>{users}</ListStyle>
      <Link to="/User/add">
        <Button alignItems="center" justifyContent="center" display="flex" height="7vh" background="grey" width="100%">
          Add
        </Button>
      </Link>
    </>
  );
}

export default UserList;
