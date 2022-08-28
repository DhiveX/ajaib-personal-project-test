import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "username",
    selector: (row) => row.login.username,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => `${row.name.first} ${row.name.last}`,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
    sortable: true,
  },
  {
    name: "Registered Date",
    selector: (row) => row.registered.date,
    sortable: true,
  },
];

export default function TableComponent(props) {
  return (
    <>
      <DataTable
        columns={columns}
        progressPending={props.isLoading}
        data={props.dataFetch}
      />
    </>
  );
}
