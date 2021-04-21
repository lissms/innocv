//REACT// HOOKS
import React, { useState, useEffect } from "react";

//SERVICE/ API
import { getUser } from "../../Api/Api";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//COMPONENTS
import User from "../../Component/UserList/User";

//PROPTYPES
import PropTypes from "prop-types";

function UserList(props) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUser().then((data) => {
      setUserList(data);
    });
  }, []);

  const Users = userList.map((user) => {
    return (
      <li className="listElement" key={user.id}>
        <User id={user.id} name={user.name} birthdate={user.birthdate} />
      </li>
    );
  });

  return (
    <>
      <div>
        <h1>User List</h1>
        <Link to="/User/add">add</Link>
      </div>
      <ul className="ul_list">{Users}</ul>
    </>
  );
}

UserList.propTypes = {};

export default UserList;
