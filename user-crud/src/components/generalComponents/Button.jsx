import React from "react";

//PROPTYPES
import PropTypes from "prop-types";

function Button(props) {
  return <div onClick={props.onClick}> {props.children}</div>;
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
