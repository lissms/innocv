import React from "react";

//PROPTYPES
import PropTypes from "prop-types";

//STYLES
import { ButtonStyle } from "./Button.styled";

function Button(props) {
  return (
    <ButtonStyle
      display={props.display}
      height={props.height}
      width={props.width}
      background={props.background}
      onClick={props.onClick}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      cursor={props.cursor}
    >
      {props.children}
    </ButtonStyle>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
