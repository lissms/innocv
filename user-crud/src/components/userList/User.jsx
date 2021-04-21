//REACT //HOOKS
import React, { useState } from "react";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//STYLES
import { UserStyle } from "./User.styled";

//UTILITIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";

//PROPTYPES
import PropTypes from "prop-types";

//COMPONENTS
import ModalWindow from "../modalWindow/ModalWindow";

function User(props) {
  let history = useHistory();
  function handleClick() {
    history.push(`/user/detail/${props.id}`);
  }
  // icon
  const edit = <FontAwesomeIcon icon={faUserEdit} />;
  const remove = <FontAwesomeIcon icon={faTrashAlt} />;

  //modal

  const [hasModalOpen, setHasModalOpen] = useState(false);
  const [itemsList, setItemsList] = useState([]);

  const getValueForNewSections = (objet) => {
    setItemsList([...itemsList, objet]);
  };

  const showModalWindow = () => {
    setHasModalOpen(hasModalOpen ? false : true);
  };

  return (
    <UserStyle>
      <div className="container_user" onClick={handleClick}>
        <p>{props.name}</p>
        <p>{props.birthdate}</p>
      </div>
      <div>
        <div className="remove-button" onClick={showModalWindow}>
          {remove}
        </div>

        {hasModalOpen ? (
          <ModalWindow
            userName={props.name}
            setHasModalOpen={setHasModalOpen}
            getValueForNewSections={getValueForNewSections}
          />
        ) : null}

        <Link to={`/User/update/${props.id}`} title="edit">
          {edit}
        </Link>
      </div>
    </UserStyle>
  );
}

User.propTypes = {
  name: PropTypes.string,
  birthdate: PropTypes.string,
  id: PropTypes.number,
};

export default User;
