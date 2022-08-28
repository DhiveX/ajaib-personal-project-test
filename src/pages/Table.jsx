import React from "react";
import TableComponent from "../components/TableComponent";
import withTable from "../_hoc/withTable";
function Table() {
  return (
    <div>
      <TableComponent />
    </div>
  );
}

export default withTable(Table);
