import React from "react";
import PropTypes from "prop-types";
import logo from "../../images/innocv-logo.png";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

//STYLES
import { LayoutStyle } from "./Layout.styled";

//UTILITIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Layout(props) {
  // icon
  const back = <FontAwesomeIcon icon={faArrowLeft} />;

  let history = useHistory();
  function handleClick() {
    history.push(`/`);
  }

  return (
    <>
      <LayoutStyle>
        <div className="title-logo">
          <img className="logo" src={logo} alt="Logo Innocv"></img>
          <h1 className="title">User manager</h1>
        </div>
        {props.isButtonBackVisible ? (
          <div className="link--back" onClick={handleClick}>
            {back}
          </div>
        ) : null}
      </LayoutStyle>
    </>
  );
}

Layout.propTypes = {};

export default Layout;
