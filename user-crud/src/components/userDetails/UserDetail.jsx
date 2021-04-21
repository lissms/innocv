//REACT// HOOKS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//SERVICE/ API
import { getUserDetails, deleteUser } from "../../services/user";

//COMPONENTS
import Button from "../generalComponents/Button";

//UTILITIES
import dayjs from "dayjs";

function UserDetail(props) {
  let myObjetParam = useParams();

  const [userDatails, setUserDetail] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    getUserDetails(myObjetParam.id).then((data) => {
      setUserDetail(data);
    });
  }, []);

  return (
    <div>
      <h1 className="userDatails__name">{`Name: ${userDatails.name}`}</h1>
      <p className="userDatails__name">{`birthdate: ${dayjs(userDatails.birthdate).format("DD MMMM YYYY")}`}</p>

      <p>{message}</p>
      <Button
        onClick={() => {
          deleteUser(myObjetParam.id);
          setMessage("This user has been removed");
        }}
      >
        Remove
      </Button>
      <Link className="caracterDatails__link--back" to="/">
        back to list
      </Link>
    </div>
  );
}

export default UserDetail;
