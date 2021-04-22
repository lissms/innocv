import React, { useState } from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import Layout from "../generalComponents/Layout";

//STYLES
import { AddUserContainer, AddUserStyle } from "./AddUser.styled";

//SERVICE/ API
import { addNewUser } from "../../services/user";

function AddUser() {
  //translation
  const { t } = useTranslation();

  const [newUserName, setNewUserName] = useState("");
  const [newUserBirthday, setNewUserBirthday] = useState("");
  const [message, setMessage] = useState("");

  //disable state
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout isButtonBackVisible={true}>
      <AddUserContainer>
        <AddUserStyle>
          <h2 className="title">{t("addNewUser")}</h2>
          <form className="from" onSubmit={handleFormSubmit}>
            <label className="add-name-label" for="Name">
              {`${t("name")}*`}
            </label>
            <input
              className="add-name"
              onChange={(ev) => {
                setNewUserName(ev.target.value);
                setName(ev.target.value);
              }}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
            <label className="add-birthday-label" for="Name">
              {`${t("birthdate")}*`}
            </label>
            <input
              className="add-birthday"
              onChange={(ev) => {
                setNewUserBirthday(ev.target.value);
                setBirthday(ev.target.value);
              }}
              type="date"
              id="birthday"
              name="birthday"
              required
            ></input>

            <input
              className="button-save"
              name={name}
              birthday={birthday}
              disabled={name === "" || birthday === ""}
              onClick={() => {
                addNewUser(newUserName, newUserBirthday);
                setMessage(`${t("messageSave1")}  ${newUserName} ${t("messageSave2")}`);
              }}
              type="submit"
              value={t("save")}
            />
          </form>
          <p>{message}</p>
        </AddUserStyle>
      </AddUserContainer>
    </Layout>
  );
}

export default AddUser;
