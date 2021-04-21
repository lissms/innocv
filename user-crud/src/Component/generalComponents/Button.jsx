import React from "react";

//PROPTYPES
import PropTypes from "prop-types";

function Button(props) {
  return <div onClick={props.onClick}> {props.children}</div>;
}

Button.propTypes = {};

export default Button;
