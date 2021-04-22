import React from "react";

// HOOKS
import { useTranslation } from "react-i18next";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

//STYLES
import { LayoutStyle, Content } from "./Layout.styled";

// IMAGES
import logo from "../../images/innocv-logo.png";

//UTILITIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//PROPTYPES
import PropTypes from "prop-types";

function Layout(props) {
  //translation
  const { t, i18n } = useTranslation();

  // icon
  const back = <FontAwesomeIcon icon={faArrowLeft} />;
  //react router
  let history = useHistory();
  function handleClick() {
    history.push(`/`);
  }

  return (
    <div>
      <LayoutStyle>
        <div className="title-logo">
          <img className="logo" src={logo} alt="Logo Innocv"></img>
          <h1 className="title">{t("title")}</h1>
        </div>

        {props.isButtonBackVisible ? (
          <div className="link--back" onClick={handleClick}>
            {back}
          </div>
        ) : null}
        <div className="translation">
          <div
            onClick={() => {
              i18n.changeLanguage("en-US");
            }}
          >
            <p>En</p>
          </div>
          <div
            onClick={() => {
              i18n.changeLanguage("es-US");
            }}
          >
            <p> Es</p>
          </div>
        </div>
      </LayoutStyle>
      <Content>{props.children}</Content>
    </div>
  );
}

Layout.propTypes = {
  isButtonBackVisible: PropTypes.bool,
  children: PropTypes.node,
};

export default Layout;
