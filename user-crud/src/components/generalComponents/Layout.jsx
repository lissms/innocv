import React from "react";
import PropTypes from "prop-types";
import logo from "../../images/innocv-logo.jpg";

//STYLES
import { LayoutStyle } from "./Layout.styled";

function Layout(props) {
  return (
    <LayoutStyle>
      <img className="logo" src={logo} alt="Logo Innocv"></img>
      <h1 className="title">User manager</h1>
    </LayoutStyle>
  );
}

Layout.propTypes = {};

export default Layout;
