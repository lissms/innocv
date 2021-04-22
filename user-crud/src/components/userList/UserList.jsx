//REACT// HOOKS
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

//SERVICE/ API
import { getUser } from "../../services/user";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

//COMPONENTS
import Layout from "../generalComponents/Layout";
import User from "./User";
import Button from "../generalComponents/Button";

//UTILITIES
import dayjs from "dayjs";

//STYLES
import { ListStyle, ButtonContainer } from "./UserList.styled";

function UserList() {
  //translation
  const { t } = useTranslation();

  const [userList, setUserList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getUser().then((data) => {
      setUserList(data);
    });
  }, []);

  const users = userList
    .filter((user) => user.name)
    .map((user) => {
      return (
        <li className="listElement" key={user.id}>
          <User id={user.id} name={user.name} birthdate={dayjs(user.birthdate).format("DD MMMM YYYY")} />
        </li>
      );
    });

  return (
    <Layout isButtonBackVisible={false}>
      <ButtonContainer>
        <Button
          alignItems="center"
          justifyContent="center"
          display="flex"
          height="40px"
          background="#f8b18e"
          width="100%"
          onClick={() => history.push("/user/add")}
        >
          {t("add")}
        </Button>
      </ButtonContainer>
      <ListStyle>{users}</ListStyle>
    </Layout>
  );
}

export default UserList;
