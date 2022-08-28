import React from "react";
import TableComponent from "../components/TableComponent";
import withTable from "../_hoc/withTable";
function Table(props) {
  // props received from withTable component higher order componenet
  return (
    <div>
      <TableComponent {...props} />
    </div>
  );
}

export default withTable(Table);
