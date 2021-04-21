//REACT// HOOKS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//REACT-ROUTER-DOM
import { Link } from "react-router-dom";

//SERVICE/ API
import { getUserDetails, deleteUser } from "../../Api/Api";

//COMPONENTS
import Button from "../../Component/generalComponents/Button";

//PROPTYPES
import PropTypes from "prop-types";

function RemoveUser(props) {
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
      <Link className="caracterDatails__link--back" to="/">
        X
      </Link>
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
      <Link className="caracterDatails__link--back" to="/">
        cancel
      </Link>
    </div>
  );
}

RemoveUser.propTypes = {};

export default RemoveUser;
