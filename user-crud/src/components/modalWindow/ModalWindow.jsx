//REACT// HOOKS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//SERVICE/ API
import { getUserDetails, deleteUser } from "../../services/user";

//COMPONENTS
import Button from "../../components/generalComponents/Button";

import { Modal, Close } from "./ModalWindow.styled";
import PropTypes from "prop-types";

function ModalWindow(props) {
  const CloseModalWindow = () => {
    props.setHasModalOpen(false);
  };

  let myObjetParam = useParams();

  const [userDatails, setUserDetail] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    getUserDetails(myObjetParam.id).then((data) => {
      setUserDetail(data);
    });
  }, []);

  return (
    <Modal>
      <div className="modal-container">
        <div className="title-modal">
          <h2>Add New Sections</h2>

          <Close onClick={CloseModalWindow}>
            <p>X</p>
          </Close>
        </div>
        <div>
          <p>{`Are you sure you want to remove ${userDatails.name} permanently?`}</p>
          <p>{message}</p>

          <Button
            onClick={() => {
              deleteUser(myObjetParam.id);
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
  getValueForNewSections: PropTypes.func,
  setHasModalOpen: PropTypes.func,
};

export default ModalWindow;
