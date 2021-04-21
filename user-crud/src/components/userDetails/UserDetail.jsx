//REACT// HOOKS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//SERVICE/ API
import { getUserDetails } from "../../services/user";

//COMPONENTS

import Layout from "../generalComponents/Layout";
import ModalWindow from "../modalWindow/ModalWindow";

//UTILITIES
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";

//STYLES
import { UserDetailStyle } from "./UserDetail.styled";

function UserDetail() {
  //modal

  const [hasModalOpen, setHasModalOpen] = useState(false);
  const [itemsList, setItemsList] = useState([]);

  const getValueForNewSections = (objet) => {
    setItemsList([...itemsList, objet]);
  };

  const showModalWindow = () => {
    setHasModalOpen(hasModalOpen ? false : true);
  };

  // hooks router
  let myObjetParam = useParams();

  const [userDatails, setUserDetail] = useState({});

  useEffect(() => {
    getUserDetails(myObjetParam.id).then((data) => {
      setUserDetail(data);
    });
  }, []);

  const edit = <FontAwesomeIcon icon={faUserEdit} />;
  const remove = <FontAwesomeIcon icon={faTrashAlt} />;

  return (
    <>
      <Layout isButtonBackVisible={true} />
      <UserDetailStyle>
        <div className="user-target">
          <h1 className="userDatails__name">{`Name: ${userDatails.name}`}</h1>
          <p className="userDatails__name">{`birthdate: ${dayjs(userDatails.birthdate).format("DD MMMM YYYY")}`}</p>
          <div className="button-container">
            <div className="show-modal" onClick={showModalWindow}>
              {remove}
            </div>
            {hasModalOpen ? (
              <ModalWindow
                userName={userDatails.name}
                setHasModalOpen={setHasModalOpen}
                getValueForNewSections={getValueForNewSections}
              />
            ) : null}

            <Link to={`/User/update/${myObjetParam.id}`} title="edit">
              {edit}
            </Link>
          </div>
        </div>
      </UserDetailStyle>
    </>
  );
}

export default UserDetail;
