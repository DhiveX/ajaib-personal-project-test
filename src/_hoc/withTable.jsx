import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/tableAction";
import { getUserByFilter } from "../store/API/tableCrud";

const withTable = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const dataRedux = useSelector((state) => state.tableReducer.dataFetch);

    function fetchData(filter = "") {
      setLoading(true);
      getUserByFilter(filter)
        .then((response) => {
          dispatch(actions.getData(response.data.results));
          setLoading(false);
        })
        .catch((error) => {
          dispatch(actions.getData({}));
          setLoading(false);
        });
    }

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <>
        <WrappedComponent
          {...props}
          isLoading={loading}
          dataFetch={dataRedux}
        />
      </>
    );
  };
};

export default withTable;
