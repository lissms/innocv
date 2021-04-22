//REACT// HOOKS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

//SERVICE/ API
import { getUserDetails } from "../../services/user";

//COMPONENTS
import Layout from "../generalComponents/Layout";
import ModalWindow from "../modalWindow/ModalWindow";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

//UTILITIES
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";

//STYLES
import { UserDetailStyle } from "./UserDetail.styled";

function UserDetail() {
  //translation
  const { t } = useTranslation();

  const [hasModalOpen, setHasModalOpen] = useState(false);
  const [itemsList, setItemsList] = useState([]);
  let history = useHistory();

  const getValueForNewSections = (objet) => {
    setItemsList([...itemsList, objet]);
  };

  const showModalWindow = () => {
    setHasModalOpen(hasModalOpen ? false : true);
  };

  const goEditUser = () => history.push(`/user/update/${myObjetParam.id}`);

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
      <Layout isButtonBackVisible={true}>
        <UserDetailStyle>
          <div className="user-target">
            <span>{t("name")} </span>
            <h1 className="userDatails">{userDatails.name}</h1>
            <span>{t("birthdate")}</span>
            <h3 className="userDatails">{dayjs(userDatails.birthdate).format("DD MMMM YYYY")}</h3>
            <div className="button_container">
              <button className="button remove-button" onClick={showModalWindow}>
                {remove}
              </button>

              <button className="button" title="edit" onClick={goEditUser}>
                {edit}
              </button>
            </div>
          </div>
          {hasModalOpen ? (
            <ModalWindow
              id={myObjetParam.id}
              userName={userDatails.name}
              setHasModalOpen={setHasModalOpen}
              getValueForNewSections={getValueForNewSections}
            />
          ) : null}
        </UserDetailStyle>
      </Layout>
    </>
  );
}

export default UserDetail;
