import React from "react";
import TableComponent from "../components/TableComponent";
import withTable from "../_hoc/withTable";
import TableFilter from "../components/TableFilter";
function Table(props) {
  // props received from withTable component higher order componenet
  return (
    <div>
      <TableFilter {...props} />
      <TableComponent {...props} />
    </div>
  );
}

export default withTable(Table);
