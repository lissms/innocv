import React from "react";

// HOOKS
import PuffLoader from "react-spinners/PuffLoader";

//STYLES
import { LoaderContainerStyle } from "./Loader.styled";

function Loader() {
  return (
    <LoaderContainerStyle>
      <PuffLoader color={"white"} loading={true} size={60} />
    </LoaderContainerStyle>
  );
}

export default Loader;
