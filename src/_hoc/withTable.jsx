import React from "react";
import { useSelector, useDispatch } from "react-redux";

const withTable = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withTable;
