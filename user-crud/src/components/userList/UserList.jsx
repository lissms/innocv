//REACT// HOOKS
import React, { useState, useEffect } from "react";

//SERVICE/ API
import { getUser } from "../../services/user";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//COMPONENTS
import User from "./User";

//UTILITIES
import dayjs from "dayjs";

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
      <div>
        <h1>User List</h1>
        <Link to="/User/add">add</Link>
      </div>
      <ul className="ul_list">{users}</ul>
    </>
  );
}

export default UserList;
