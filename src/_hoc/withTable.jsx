import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/tableAction";
import { getUserByFilter } from "../store/API/tableCrud";

const withTable = (WrappedComponent) => {
  return (props) => {
    const [filter, setFilter] = useState({
      page: 1,
      pageSize: 10,
      gender: null,
      keyword: null,
      sortBy: null,
      sortOrder: "ascend",
      results: 50,
      seed: "ajaib",
    });
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const dataRedux = useSelector((state) => state.tableReducer.dataFetch);

    function fetchData() {
      setLoading(true);

      let query = [];
      if (filter.page) {
        query = [...query, `page=${filter.page}`];
      }
      if (filter.pageSize) {
        query = [...query, `pageSize=${filter.pageSize}`];
      }
      if (filter.gender) {
        query = [...query, `gender=${filter.gender}`];
      }
      if (filter.keyword) {
        query = [...query, `keyword=${filter.keyword}`];
      }
      if (filter.sortBy) {
        query = [...query, `sortBy=${filter.sortBy}`];
      }
      if (filter.sortOrder) {
        query = [...query, `sortOrder=${filter.sortOrder}`];
      }
      if (filter.results) {
        query = [...query, `results=${filter.results}`];
      }
      if (filter.seed) {
        query = [...query, `seed=${filter.seed}`];
      }

      let finalQueryParams = "";
      if (query.length > 0) {
        finalQueryParams = "?" + query.join("&");
      }

      getUserByFilter(finalQueryParams)
        .then((response) => {
          dispatch(actions.getData(response.data.results));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          dispatch(actions.getData({}));
          setLoading(false);
        });
    }

    useEffect(() => {
      if (dataRedux.length < 1) {
        fetchData();
      }
    });

    return (
      <>
        <WrappedComponent
          {...props}
          isLoading={loading}
          dataFetch={dataRedux}
          applyFilter={() => fetchData()}
          appliedFilter={filter}
          setFilter={(item) => setFilter(item)}
        />
      </>
    );
  };
};

export default withTable;
