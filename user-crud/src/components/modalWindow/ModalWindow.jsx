//REACT// HOOKS
import React, { useState } from "react";
import { useParams } from "react-router-dom";

//SERVICE/ API
import { deleteUser } from "../../services/user";

//COMPONENTS
import Button from "../../components/generalComponents/Button";

import { Modal, Close } from "./ModalWindow.styled";
import PropTypes from "prop-types";

function ModalWindow(props) {
  const CloseModalWindow = () => {
    props.setHasModalOpen(false);
  };

  const [message, setMessage] = useState("");

  return (
    <Modal>
      <div className="modal-container">
        <div className="title-modal">
          <p>
            Are you sure you want to remove <b>{props.userName}</b> permanently?
          </p>

          <Close onClick={CloseModalWindow}>
            <p>X</p>
          </Close>
        </div>
        <div>
          <p>{message}</p>

          <Button
            onClick={() => {
              deleteUser(props.id);
              setMessage("This user has been removed");
            }}
          >
            Remove
          </Button>
          <div onClick={CloseModalWindow}>cancel</div>
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

export default ModalWindow;
