import React from "react";
import TableComponent from "../components/TableComponent";
import withTable from "../_hoc/withTable";
import TableFilter from "../components/TableFilter";
function Table(props) {
  // props received from withTable component higher order componenet
  return (
    <div className="p-[40px] ">
      <div className="flex items-center mb-6">
        <div className="flex gap-2 items-center w-1/6">
          <picture>
            <img
              className="rounded-full"
              src="/images/ajaib_logo.webp"
              alt="main logo"
            />
          </picture>
        </div>
        <div className="w-5/6">
          <TableFilter {...props} />
        </div>
      </div>
      <div>
        <TableComponent {...props} />
      </div>
    </div>
  );
}

export default withTable(Table);
