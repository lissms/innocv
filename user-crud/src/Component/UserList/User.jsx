//REACT
import React from "react";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//PROPTYPES
import PropTypes from "prop-types";

function User(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.birthdate}</p>
      <Link to={`/user/detail/${props.id}`}>Datails</Link>
      <br />
      <Link to={`/user/remove/${props.id}`}>Remove</Link>
      <br />
      <Link to={`/User/update/${props.id}`}>Edit</Link>
    </div>
  );
}
//button reutilizable para eliminar y editar
User.propTypes = {};

export default User;
