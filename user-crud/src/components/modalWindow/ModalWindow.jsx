//REACT// HOOKS
import React from "react";
import { useTranslation } from "react-i18next";

//REACT-REDUX
import { connect } from "react-redux";
import { setLoadingData } from "../../actionsCreator/actionsCreator";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

//SERVICE/ API
import { deleteUser } from "../../services/user";

//COMPONENTS
import Button from "../../components/generalComponents/Button";

//UTILITIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

//STYLES
import { Modal, Close } from "./ModalWindow.styled";

//PROPTYPES
import PropTypes from "prop-types";

function ModalWindow(props) {
  //translation
  const { t } = useTranslation();

  const history = useHistory();

  const closeModalWindow = () => {
    props.setHasModalOpen(false);
  };

  const close = <FontAwesomeIcon icon={faTimesCircle} />;

  return (
    <Modal>
      <div className="modal-container">
        <Close onClick={closeModalWindow}>{close}</Close>
        <div className="title-modal">
          <p>
            {t("modalMessage1")} <b>{props.userName}</b> {t("modalMessage2")}
          </p>
        </div>
        <div>
          <div className="button_container">
            <Button background="#caa4ea" onClick={closeModalWindow}>
              {t("cancel")}
            </Button>
            <Button
              background="#f17680"
              onClick={() => {
                props.setLoadingData(true);
                deleteUser(props.id).then(() => {
                  props.getUserList();

                  closeModalWindow();
                  history.push("/");
                });
              }}
            >
              {t("remove")}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

ModalWindow.propTypes = {
  id: PropTypes.number,
  userName: PropTypes.string,
  getValueForNewSections: PropTypes.func,
  setHasModalOpen: PropTypes.func,
};

const mapDispatchToProps = {
  setLoadingData,
};

export default connect(null, mapDispatchToProps)(ModalWindow);
